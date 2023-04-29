import { Heading, VStack } from "@chakra-ui/react";

export default function Home() {
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
        fontSize={"4rem"}
      >
        {"Kevin's Personal site: In-Progress!!"}
      </Heading>
    </VStack>
  );
}
