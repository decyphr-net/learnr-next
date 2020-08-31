import { Heading } from "@chakra-ui/core";
import { HeadingProps } from "./types";

export const H1 = ({ text }: HeadingProps) => (
  <Heading as="h1" size="xl" mt={"1.5%"}>
    {text}
  </Heading>
);
