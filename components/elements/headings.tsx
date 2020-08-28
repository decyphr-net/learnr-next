import { Heading } from "@chakra-ui/core";
import { IHeadingProps } from "./interfaces";

export const H1 = ({ text }: IHeadingProps) => (
  <Heading as="h1" size="xl" mt={"1.5%"}>
    {text}
  </Heading>
);
