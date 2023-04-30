import {
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { FC, PropsWithChildren } from "react";
import { SkillIcon } from "./SkillIcon";

const h1: FC = (props) => <Heading variant={"h1"} {...props} />;
const h2: FC = (props) => <Heading variant={"h2"} {...props} />;
const h3: FC = (props) => <Heading variant={"h3"} {...props} />;
const h4: FC = (props) => <Heading variant={"h4"} {...props} />;
const h5: FC = (props) => <Heading variant={"h5"} {...props} />;
const h6: FC = (props) => <Heading variant={"h6"} {...props} />;
const ol: FC = (props) => <OrderedList {...props} />;
const ul: FC = (props) => <UnorderedList {...props} />;
const li: FC = (props) => <ListItem {...props} />;

const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  li,
  SkillIcon,
};

export const AppMDXProvider: FC<PropsWithChildren> = (props) => {
  return <MDXProvider components={components}>{props.children}</MDXProvider>;
};
