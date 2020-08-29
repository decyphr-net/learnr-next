import NextLink from "next/link";
import {
  Stack,
  Icon,
  Link,
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
import Layout from "../../components/Layout";
import { UnitPanel } from "../../components/elements/panels";
import { TextComponent } from "../../components/unit/text";

const LessonTwo = () => {
  return (
    <Layout
      crumbs={[
        { text: "Curso", location: "/", isCurrent: false },
        {
          text: "Apresentações",
          location: "/introductions/",
          isCurrent: false,
        },
        {
          text: "Olá!",
          location: "/introductions/ola",
          isCurrent: true,
        },
      ]}
      headingText="Olá!"
      title="Curso | Apresentações | Olá!"
    >
      <Stack spacing={1}>
        <UnitPanel title={"ii. Olá!"}>
          <TextComponent isFirst>
            No idioma inglês, existem várias maneiras de dizer 'olá'.
          </TextComponent>

          <TextComponent>
            O mais comum e <em>mais oficial</em> seria a palavra{" "}
            <Popover placement="top">
              <PopoverTrigger>
                <span style={{ backgroundColor: "lightgrey" }}>hello</span>
              </PopoverTrigger>
              <DarkMode>
                <PopoverContent
                  border="0"
                  zIndex={4000}
                  width="400px"
                  color="white"
                >
                  <PopoverArrow />
                  <PopoverHeader fontWeight="semibold">Hello</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>Tradução literal: olá</PopoverBody>
                </PopoverContent>
              </DarkMode>
            </Popover>
          </TextComponent>
        </UnitPanel>
      </Stack>
      <NextLink href="/introductions/ola">
        <Link m={"auto"}>
          <Icon name="chevron-right" />
        </Link>
      </NextLink>
    </Layout>
  );
};

export default LessonTwo;
