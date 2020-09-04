import React from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Solid = () => (
  <ThemeProvider theme={theme}>
    <Button variant="solid" variantColor="gray.500">
      Solid
    </Button>
  </ThemeProvider>
);

export const Outline = () => (
  <ThemeProvider theme={theme}>
    <Button variant="outline">Primary</Button>
  </ThemeProvider>
);
