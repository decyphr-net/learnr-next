import {
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  DarkMode,
} from "@chakra-ui/core";
import { MdVolumeUp } from "react-icons/md";
import { PopupExplainerProps } from "./types";

export const PopupExplainer = ({
  explainerTriggerText,
  explainerHeader,
  literalTranslation,
}: PopupExplainerProps) => (
  <>
    <Popover placement="top">
      <PopoverTrigger>
        <Text as="span" color={"green.500"} textDecor={"underline"}>
          {explainerTriggerText}
        </Text>
      </PopoverTrigger>
      <DarkMode>
        <PopoverContent border="0" zIndex={4000} width="400px" color="white">
          <PopoverArrow />
          <PopoverHeader fontWeight="semibold">
            {explainerHeader} <Icon as={MdVolumeUp} />
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>Tradução literal: {literalTranslation}</PopoverBody>
        </PopoverContent>
      </DarkMode>
    </Popover>
  </>
);
