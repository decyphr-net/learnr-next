import { Flex, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Flex
      bg="gray.800"
      w="full"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mx="auto"
      >
        <Text color="white">Learnr Copyright 2020</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
