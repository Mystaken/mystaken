import { Heading, VStack } from "@chakra-ui/react";
// import { getAllFilesFrontMatter } from "./mdx";

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
    </VStack>
  );
}

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter();

//   return { props: { posts } };
// }
