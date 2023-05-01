import { VStack, chakra } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
};
const PageBase: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <VStack
      px={"100px"}
      height={"full"}
      w={"100%"}
      className={props.className}
      bg={"mystaken.primary.1"}
    >
      {props.children}
    </VStack>
  );
};

export const Page = chakra(PageBase);
