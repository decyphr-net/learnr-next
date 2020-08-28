import { Link } from "../../i18n";
import { Heading, Box, Text } from "@chakra-ui/core";
import { IModulePanelProps, IUnitPanelProps } from "./interfaces";

export const ModulePanel = ({
  title,
  description,
  location,
}: IModulePanelProps) => (
  <Link href={location}>
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

export const UnitPanel = ({ title, children }: IUnitPanelProps) => (
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
