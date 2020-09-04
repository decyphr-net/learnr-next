import { Button as ChakraButton } from "@chakra-ui/core";

const Button = (props: any) => (
  <ChakraButton {...props}>{props.children}</ChakraButton>
);

export default Button;
