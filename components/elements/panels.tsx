import { Link } from "../../i18n";
import { Heading, Box, Text } from "@chakra-ui/core";
import { ModulePanelProps, UnitPanelProps } from "./types";

export const ModulePanel = ({
  title,
  description,
  location,
  as,
}: ModulePanelProps) => (
  <Link href={location} as={as}>
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
  </Link>
);

export const UnitPanel = ({ title, children }: UnitPanelProps) => (
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
    {children}
  </Box>
);
