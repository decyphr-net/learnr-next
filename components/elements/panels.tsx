import { Heading, Box, Text } from "@chakra-ui/core";
import { IModulePanelProps } from "./interfaces";

export const ModulePanel = ({ title, description }: IModulePanelProps) => (
  <Box
    shadow="md"
    borderWidth="1px"
    p={{ xs: "5%", md: "2.5%" }}
    mb={{ xs: "5%", md: "1.5%" }}
    w={"full"}
  >
    <Heading as="h2" fontSize="xl">
      {title}
    </Heading>
    <Text mt={4}>{description}</Text>
  </Box>
);
