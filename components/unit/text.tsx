import { Text, List, ListItem, ListIcon } from "@chakra-ui/core";
import { TextComponentProps, ListComponentProps } from "./types";

export const TextComponent = ({ children, isFirst }: TextComponentProps) => (
  <Text mb={"5%"} mt={isFirst ? "5%" : ""}>
    {children}
  </Text>
);

export const ListComponent = ({ listContents }: ListComponentProps) => (
  <List spacing={3} mb={"5%"}>
    {listContents.map((contents: string, index: number) => {
      return (
        <ListItem key={index}>
          <ListIcon icon="small-add" color="green.500" />
          {contents}
        </ListItem>
      );
    })}
  </List>
);
