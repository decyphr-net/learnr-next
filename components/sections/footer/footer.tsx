import { Flex, Text, useTheme } from "@chakra-ui/core";

const Footer = () => {
  const theme = useTheme();
  return (
    <Flex
      bg={theme.colors.gray[800]}
      w={theme.sizes.full}
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
        <Text color={theme.colors.white}>Learnr Copyright 2020</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
