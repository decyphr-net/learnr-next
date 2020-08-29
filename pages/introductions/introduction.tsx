import NextLink from "next/link";
import { Stack, Icon, Link } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import { UnitPanel } from "../../components/elements/panels";
import { TextComponent, ListComponent } from "../../components/unit/text";

const LessonOne = () => {
  const learningOutcomes: Array<string> = [
    "Como dizer 'olá'",
    "Pergunte como alguém está",
    "Diga a alguém o seu nome",
    "Responda a essas perguntas quando perguntado",
  ];
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
          text: "Introdução à aula",
          location: "/introductions/introduction",
          isCurrent: true,
        },
      ]}
      headingText="Introdução à aula"
      title="Curso | Apresentações | Introdução à aula"
    >
      <Stack spacing={1}>
        <UnitPanel title={"i. Introdução à aula"}>
          <TextComponent isFirst>
            Ao longo desta lição, veremos algumas das diferentes maneiras com
            que os falantes de inglês se cumprimentam. Veremos como você pode
            fazer outra pessoa e lhes daremos algumas informações básicas sobre
            você.
          </TextComponent>

          <TextComponent>
            Existem algumas razões para isso. Em primeiro lugar, queremos
            começar a ver algumas palavras em inglês! Queremos ver como elas se
            parecem e como soam, e como as frases funcionam no idioma inglês.
            Não apenas isso, mas quando encontramos outros falantes de inglês,
            queremos saber como cumprimentá-los e nos apresentar.
          </TextComponent>

          <TextComponent>
            Para isso, precisamos dar uma olhada em como podemos dizer coisas
            como 'oi, tudo bem?' ou 'meu nome é...', e também precisaremos saber
            como responder a essas perguntas ou declarações. E em vez de olhar
            estritamente para perguntas e respostas típicas, vamos olhar para
            algumas das diferentes coisas que os falantes de inglês podem dizer
            em situações normais do dia a dia, mas também em uma linguagem mais
            formal.
          </TextComponent>

          <TextComponent>O que vamos aprender:</TextComponent>

          <ListComponent listContents={learningOutcomes} />

          <TextComponent>
            Agora que sabemos o que aprenderemos, vamos começar!
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

export default LessonOne;
