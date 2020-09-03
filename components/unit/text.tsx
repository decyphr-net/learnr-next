import {
  Text,
  List,
  ListItem,
  ListIcon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";
import { TextComponentProps, ListComponentProps } from "./types";

export const TextComponent = ({ children, isFirst }: TextComponentProps) => (
  <Text mb={"5%"} mt={isFirst ? "5%" : ""}>
    {children}
  </Text>
);

export const HeadsUpText = ({ children }: any) => (
  <Alert
    status="warning"
    mt="5%"
    mb="1%"
    flexDirection="column"
    justifyContent="center"
    textAlign="center"
    height="275px"
  >
    <AlertIcon size="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Lembre-se:
    </AlertTitle>
    <AlertDescription maxWidth="750px">{children}</AlertDescription>
  </Alert>
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
