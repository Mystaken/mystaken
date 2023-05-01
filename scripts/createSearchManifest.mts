import { remark } from "remark";
import remarkMdx from "remark-mdx";
import { Root } from "remark-mdx";
import fs from "fs";
import path from "path";

/**
 * Creates a search manifest for the search bar
 * TODO: Hook this up in a webpack plugin
 */
const rootPath = process.cwd();

type Match = {
  type: "header" | "text";
  content: string;
};
type ResultMatch = {
  header: string;
  matches: Match[];
};

const getTextFromChild = (child: Root["children"][number]): string => {
  switch (child.type) {
    case "listItem":
    case "list":
      return child.children.map(getTextFromChild).join("\n");
    case "paragraph":
    case "heading":
    case "strong":
    case "link":
      return child.children.map(getTextFromChild).join(" ");
    case "text":
      return child.value;
    default:
      return "";
  }
};

const processTreeChildrenItem = (children: Root["children"]): Match[] =>
  children
    .flatMap<Match>((child) => {
      switch (child.type) {
        case "heading":
        case "strong":
          return [
            {
              type: child.type === "heading" ? "header" : "text",
              content: getTextFromChild(child).trim(),
            },
          ];
        case "paragraph":
        case "list":
        case "listItem":
          return processTreeChildrenItem(child.children);
        default:
          return [
            {
              type: "text",
              content: getTextFromChild(child).trim(),
            },
          ];
      }
    })
    .filter((v) => v.content.length > 0);

const processTreeChildren = (children: Root["children"]): ResultMatch => {
  const headerIdx = children.findIndex((i) => i.type === "heading");
  const header = children[headerIdx];
  const headerContent = getTextFromChild(header);
  const rest = children.filter((_, i) => i !== headerIdx);

  return { header: headerContent, matches: processTreeChildrenItem(rest) };
};

const getMatchFromFile = (path: string): ResultMatch => {
  const file = fs.readFileSync(path);
  let result: ResultMatch;
  remark()
    .use(remarkMdx)
    .use(() => (tree, _, next) => {
      result = processTreeChildren(tree.children);
      next();
    })
    .processSync(file);
  // @ts-ignore
  return result;
};

const extension = ".mdx";
type DirectoryMatch = {
  name: string;
  path: string;
  match: ResultMatch;
};
const getDirectoryMatches = (directoryPath: string): DirectoryMatch[] =>
  fs.readdirSync(directoryPath, { withFileTypes: true }).flatMap((v) => {
    if (v.isDirectory()) {
      const innerPath = path.join(directoryPath, v.name);
      return getDirectoryMatches(innerPath);
    } else if (v.isFile() && v.name.endsWith(".mdx")) {
      const name = v.name.slice(0, v.name.length - extension.length);
      const innerPath = path.join(directoryPath, v.name);
      return [
        {
          name,
          path: path.join(directoryPath, v.name),
          match: getMatchFromFile(innerPath),
        },
      ];
    }
    return [];
  });

const createSearchResults = () => {
  const basePath = path.join(rootPath, "./src/mdx/pages");
  const directoryMatches = getDirectoryMatches(
    path.join(rootPath, "./src/mdx/pages")
  );

  const jsonOutput = directoryMatches.map((match) => {
    const pagePath = path.relative(basePath, match.path).split(path.sep);
    pagePath.pop();
    const id = match.match.header
      .replaceAll(/[^\w\-\s]/g, "")
      .split(" ")
      .filter((_) => _)
      .join("-");
    return { id, matches: match.match, pagePath };
  });
  const writePath = path.join(rootPath, "./public/search.manifest.json");
  fs.writeFileSync(writePath, JSON.stringify(jsonOutput));
};

createSearchResults();
