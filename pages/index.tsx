import { Heading, VStack } from "@chakra-ui/react";
import Post from "@mystaken/src/mdx/pages/test/markdown.mdx";

export default function Home({ postData }: any) {
  return (
    <VStack
      minH={"100vh"}
      padding={"0 0 0.5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Heading
        _hover={{ textDecoration: "underline" }}
        lineHeight={1.15}
        variant={"h1"}
      >
        {"Kevin's Personal site: In-Progress!!"}
      </Heading>
      <Post components={{ h3: (p) => <Heading {...p}></Heading> }} />
    </VStack>
  );
}
