import { Stack, Flex } from "@chakra-ui/core";
import Layout from "@components/Layout";
import NavChevron from "@components/sections/navigation/unitNavigation";
import { UnitPanel } from "@components/elements/panels";
import { TextComponent, ListComponent } from "@components/unit/text";

const Unit = (props: any) => {
  return (
    <Layout
      crumbs={[{ text: "Curso", location: "/", isCurrent: false }]}
      headingText="i. Introdução à aula"
      title="Curso | i. Introdução à aula"
    >
      <Stack spacing={1}>
        <UnitPanel title="">
          <TextComponent isFirst>
            {" "}
            Ao longo desta lição, veremos algumas das diferentes maneiras com
            que os falantes de inglês se cumprimentam. Veremos como você pode
            fazer outra pessoa e lhes daremos algumas informações básicas sobre
            você.{" "}
          </TextComponent>{" "}
          <TextComponent>
            {" "}
            Existem algumas razões para isso. Em primeiro lugar, queremos
            começar a ver algumas palavras em inglês! Queremos ver como elas se
            parecem e como soam, e como as frases funcionam no idioma inglês.
            Não apenas isso, mas quando encontramos outros falantes de inglês,
            queremos saber como cumprimentá-los e nos apresentar.{" "}
          </TextComponent>{" "}
          <TextComponent>
            {" "}
            Para isso, precisamos dar uma olhada em como podemos dizer coisas
            como 'oi, tudo bem?' ou 'meu nome é...', e também precisaremos saber
            como responder a essas perguntas ou declarações. E em vez de olhar
            estritamente para perguntas e respostas típicas, vamos olhar para
            algumas das diferentes coisas que os falantes de inglês podem dizer
            em situações normais do dia a dia, mas também em uma linguagem mais
            formal.{" "}
          </TextComponent>{" "}
          <TextComponent>O que vamos aprender:</TextComponent>{" "}
          <TextComponent>
            {" "}
            Agora que sabemos o que aprenderemos, vamos começar!{" "}
          </TextComponent>
        </UnitPanel>
      </Stack>
      <Flex>
        <NavChevron
          location="/introductions/1-olameunomee/2-ola"
          direction="right"
        />
      </Flex>
    </Layout>
  );
};

export default Unit;
