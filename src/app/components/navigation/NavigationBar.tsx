import {
  Divider,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Image,
  Link,
  Text,
  chakra,
} from "@chakra-ui/react";
import {
  ContentContainer,
  GithubIcon,
  LinkedinIcon,
  InternalLink,
  config,
} from "@mystaken/src/common";
import { FC } from "react";

type NavigationItem = {
  label: string;
  href: string;
  external?: true;
};

const NavigationItems: NavigationItem[] = [
  {
    label: "Resume",
    href: "resume.pdf",
    external: true,
  },
  {
    label: "Experiences",
    href: "experiences",
  },
];

const NavigationItemButton: FC<NavigationItem> = (props) => {
  return (
    <InternalLink href={props.href} isExternal={props.external}>
      <Text color={"mystaken.primary.1"}>{props.label}</Text>
    </InternalLink>
  );
};

const NavigationBarIconButton: FC<IconButtonProps> = (props) => (
  <IconButton
    variant={"unstyled"}
    color={"mystaken.primary.1"}
    borderRadius={"50%"}
    bac
    {...props}
  />
);
const NavigationBarIcon = chakra(Icon);

export const NavigationBar: FC = () => {
  return (
    <HStack align={"center"} h={"60px"} w={"full"} bg={"mystaken.primary.5"}>
      <ContentContainer>
        <HStack
          align={"center"}
          justify={"space-between"}
          h={"60px"}
          w={"full"}
          bg={"mystaken.primary.5"}
        >
          <HStack>
            <InternalLink href={"/home"}>
              <Image
                src={"./profile.png"}
                w={"40px"}
                h={"40px"}
                borderColor={"mystaken.primary.1"}
                border={"5px"}
                borderRadius={"5px"}
              />
            </InternalLink>
          </HStack>
          <HStack>
            <HStack
              divider={
                <Divider
                  orientation={"vertical"}
                  color={"mystaken.primary.1"}
                />
              }
            >
              {NavigationItems.map((item, i) => (
                <NavigationItemButton key={i} {...item} />
              ))}
            </HStack>
            <Link href={config.socials.github} isExternal={true}>
              <NavigationBarIconButton
                icon={<NavigationBarIcon as={GithubIcon} />}
                aria-label={"GitHub"}
              />
            </Link>
            <Link href={config.socials.linkedin} isExternal={true}>
              <NavigationBarIconButton
                icon={<NavigationBarIcon as={LinkedinIcon} />}
                aria-label={"LinkedIn"}
              />
            </Link>
          </HStack>
        </HStack>
      </ContentContainer>
    </HStack>
  );
};
