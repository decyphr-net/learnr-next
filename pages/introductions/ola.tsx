import NextLink from "next/link";
import { Stack, Icon, Link } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import { UnitPanel } from "../../components/elements/panels";
import { TextComponent } from "../../components/unit/text";
import { PopupExplainer } from "../../components/unit/explainer";

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
            <PopupExplainer
              explainerTriggerText="hello"
              explainerHeader="Hello"
              literalTranslation="olá"
            />
            .
          </TextComponent>

          <TextComponent>
            Embora{" "}
            <PopupExplainer
              explainerTriggerText="hello"
              explainerHeader="Hello"
              literalTranslation="olá"
            />{" "}
            seja o mais oficial, provavelmente não é o mais comum. Costumamos
            dizer{" "}
            <PopupExplainer
              explainerTriggerText="hello"
              explainerHeader="Hello"
              literalTranslation="olá"
            />{" "}
            quando estamos falando ao telefone, ou se tivermos menos certeza se
            alguém está presente. Por exemplo, se entrarmos no escritório de um
            colega e não o encontrarmos, diríamos 'hello?', como se disséssemos
            'alguém aí?'
          </TextComponent>

          <TextComponent>
            A maneira mais comum de dizer{" "}
            <PopupExplainer
              explainerTriggerText="hello"
              explainerHeader="Hello"
              literalTranslation="olá"
            />{" "}
            em inglês é provavelmente{" "}
            <PopupExplainer
              explainerTriggerText="hi"
              explainerHeader="Hi"
              literalTranslation="oi"
            />
            . Embora{" "}
            <PopupExplainer
              explainerTriggerText="hello"
              explainerHeader="Hello"
              literalTranslation="olá"
              space={true}
            />
            muitas vezes possa ser considerado mais formal, é perfeitamente
            normal usar{" "}
            <PopupExplainer
              explainerTriggerText="hi"
              explainerHeader="Hi"
              literalTranslation="oi"
              space={true}
            />{" "}
            como uma saudação, mesmo em contextos mais formais, como em um
            e-mail para um colega de trabalho ou cliente.
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
