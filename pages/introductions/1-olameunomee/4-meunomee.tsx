import { Stack, Flex } from "@chakra-ui/core";
import Layout from "@components/Layout";
import NavChevron from "@components/sections/navigation/unitNavigation";
import { UnitPanel } from "@components/elements/panels";
import { TextComponent, HeadsUpText } from "@components/unit/text";
import { PopupExplainer } from "@components/unit/explainer";

const Unit = (props: any) => {
  return (
    <Layout
      crumbs={[{ text: "Curso", location: "/", isCurrent: false }]}
      headingText="iv. Meu Nome E..."
      title="Curso | iv. Meu Nome E"
    >
      <Stack spacing={1}>
        <UnitPanel title="">
          <TextComponent isFirst>
            {" "}
            Vimos como podemos dizer olá e perguntar 'como você está' a alguém
            como é e responder. Agora vamos aprender como podemos dizer um pouco
            a uma pessoa nós mesmos.{" "}
          </TextComponent>{" "}
          <TextComponent>
            {" "}
            Em inglês, se quisermos dizer nosso nome a alguém, diremos{" "}
            <PopupExplainer
              explainerTriggerText="my name is Aaron"
              explainerHeader="My name is Aaron"
              literalTranslation="Meu nome é Aaron"
            />{" "}
            e também podemos dizer{" "}
            <PopupExplainer
              explainerTriggerText="I am Aaron"
              explainerHeader="I am Aaron"
              literalTranslation="Sou Aaron"
            />{" "}
            ou{" "}
            <PopupExplainer
              explainerTriggerText="I'm Aaron"
              explainerHeader="I'm Aaron"
              literalTranslation="Sou Aaron"
            />
            .{" "}
          </TextComponent>{" "}
          <HeadsUpText headingText="Conteúdo inexplicado">
            {" "}
            Ainda não examinamos isso e já surgiu algumas vezes. I am é a
            conjugação em primeira pessoa do verbo to be (ser/estar). 'I'm' é
            uma contração. A apostrofia simplesmente indica que algumas letras
            foram removidas. Mas não se preocupe porque veremos isso com mais
            profundidade em breve.{" "}
          </HeadsUpText>{" "}
          <TextComponent>
            {" "}
            É claro que isso seria mais comumente usado ao se encontrar alguém
            pela primeira vez. Por exemplo, você pode dizer{" "}
            <PopupExplainer
              explainerTriggerText="hi, my name is Aaron"
              explainerHeader="Hi, my name is Aaron"
              literalTranslation="Olá, meu nome é Aaron"
            />{" "}
            ou{" "}
            <PopupExplainer
              explainerTriggerText="hi, I'm Aaron"
              explainerHeader="Hi, I'm Aaron"
              literalTranslation="Olá, sou Aaron"
            />
            . Uma resposta típica a isso seria{" "}
            <PopupExplainer
              explainerTriggerText="hi, John. How are you?"
              explainerHeader="Hi, John. How are you?"
              literalTranslation="Oi, John. Como você está?"
            />
            . Observe como a resposta simplesmente tem o nome 'John' e está
            faltando o 'meu nome é'? Isso é muito comum e é apenas uma forma de
            simplificar a resposta.{" "}
          </TextComponent>{" "}
          <TextComponent>
            {" "}
            Ok, o que mais podemos dizer sobre nós? E quanto a nós? E quanto à
            nossa nacionalidade? Eu sou irlandês, então, se alguém tiver a
            nacionalidade que eu tenho, eu diria que{" "}
            <PopupExplainer
              explainerTriggerText="I am Irish"
              explainerHeader="I am Irish"
              literalTranslation="Sou irlandês"
            />
            . Ok, se você é do Brasil, qual nacionalidade você seria? A palavra
            inglesa para brasileiro(a) é{" "}
            <PopupExplainer
              explainerTriggerText="Brazilian"
              explainerHeader="Brazilian"
              literalTranslation="brasileiro(a)"
            />
            . Em inglês, as palavras não mudam de acordo com o gênero, o que
            significa que independente do seu gênero você ainda é considerado{" "}
            <PopupExplainer
              explainerTriggerText="Brazilian"
              explainerHeader="Brazilian"
              literalTranslation="brasileiro(a)"
            />
            .{" "}
          </TextComponent>
        </UnitPanel>
      </Stack>

      <Flex>
        <NavChevron
          location="/introductions/1-olameunomee/3-tudobem"
          direction="left"
        />
        <NavChevron
          location="/introductions/1-olameunomee/5-estareser"
          direction="right"
        />
      </Flex>
    </Layout>
  );
};

export default Unit;
