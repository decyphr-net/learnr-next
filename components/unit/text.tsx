import { Text, List, ListItem, ListIcon } from "@chakra-ui/core";
import { ITextComponentProps, IListComponentProps } from "./interfaces";

export const TextComponent = ({ children, isFirst }: ITextComponentProps) => (
  <Text mb={"5%"} mt={isFirst ? "5%" : ""}>
    {children}
  </Text>
);

export const ListComponent = ({ listContents }: IListComponentProps) => (
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
