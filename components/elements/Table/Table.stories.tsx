import React from "react";
import { CSSReset, Text, ThemeProvider } from "@chakra-ui/core";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from ".";

export default {
  title: "Table",
  component: Table,
  decorators: [
    (story: any) => (
      <ThemeProvider>
        <CSSReset />
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const BasicTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader>Pronoun</TableHeader>
        <TableHeader>Conjugation</TableHeader>
        <TableHeader />
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow bg="white">
        <TableCell>
          <Text fontSize="sm">I</Text>
        </TableCell>
        <TableCell>
          <Text fontSize="sm">am</Text>
        </TableCell>
      </TableRow>
      <TableRow bg="gray.50">
        <TableCell>
          <Text fontSize="sm">You</Text>
        </TableCell>
        <TableCell>
          <Text>Are</Text>
        </TableCell>
      </TableRow>
      <TableRow bg="white">
        <TableCell>
          <Text fontSize="sm">He/She/It</Text>
        </TableCell>
        <TableCell>
          <Text fontSize="sm">Is</Text>
        </TableCell>
      </TableRow>
      <TableRow bg="gray.50">
        <TableCell>
          <Text fontSize="sm">We</Text>
        </TableCell>
        <TableCell>
          <Text fontSize="sm">Are</Text>
        </TableCell>
      </TableRow>
      <TableRow bg="white">
        <TableCell>
          <Text>You</Text>
        </TableCell>
        <TableCell>
          <Text fontSize="sm">Are</Text>
        </TableCell>
      </TableRow>
      <TableRow bg="gray.50">
        <TableCell>
          <Text fontSize="sm">They</Text>
        </TableCell>
        <TableCell>
          <Text fontSize="sm">Are</Text>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
