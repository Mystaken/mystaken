import { VStack } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const Page: FC<PropsWithChildren> = (props) => {
  return (
    <VStack minH={"100vh"} px={"100px"} height={"100vh"}>
      {props.children}
    </VStack>
  );
};
