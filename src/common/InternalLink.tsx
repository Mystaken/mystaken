import { Link, forwardRef } from "@chakra-ui/react";
import NextLink from "next/link";

export const InternalLink = forwardRef((props, ref) => (
  <Link as={NextLink} {...props} ref={ref} />
));
