import { Heading } from "@chakra-ui/react";
import { Page } from "@mystaken/src/common";

export default function Home() {
  return (
    <Page justifyContent={"center"} alignItems={"center"}>
      <Heading
        _hover={{ textDecoration: "underline" }}
        lineHeight={1.15}
        variant={"h1"}
      >
        {"Kevin's Personal site: In-Progress!!"}
      </Heading>
    </Page>
  );
}
