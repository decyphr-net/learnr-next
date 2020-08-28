import { Stack, Text, List, ListItem, ListIcon } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import { UnitPanel } from "../../components/elements/panels";

const LessonOne = () => {
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
          location: "/introductions/meunomee",
          isCurrent: true,
        },
      ]}
      headingText="Introdução à aula"
      title="Curso | Apresentações | Introdução à aula"
    >
      <Stack spacing={1}>
        <UnitPanel title={"i. Introdução à aula"}>
          <Text mb={"5%"} mt={"5%"}>
            Ao longo desta lição, veremos algumas das diferentes maneiras com
            que os falantes de inglês se cumprimentam. Veremos como você pode
            fazer outra pessoa e lhes daremos algumas informações básicas sobre
            você.
          </Text>

          <Text mb={"5%"}>
            Existem algumas razões para isso. Em primeiro lugar, queremos
            começar a ver algumas palavras em inglês! Queremos ver como elas se
            parecem e como soam, e como as frases funcionam no idioma inglês.
            Não apenas isso, mas quando encontramos outros falantes de inglês,
            queremos saber como cumprimentá-los e nos apresentar.
          </Text>

          <Text mb={"5%"}>
            Para isso, precisamos dar uma olhada em como podemos dizer coisas
            como 'oi, tudo bem?' ou 'meu nome é...', e também precisaremos saber
            como responder a essas perguntas ou declarações. E em vez de olhar
            estritamente para perguntas e respostas típicas, vamos olhar para
            algumas das diferentes coisas que os falantes de inglês podem dizer
            em situações normais do dia a dia, mas também em uma linguagem mais
            formal.
          </Text>

          <Text mb={"5%"}>O que vamos aprender:</Text>

          <List spacing={3} mb={"5%"}>
            <ListItem>
              <ListIcon icon="small-add" color="green.500" />
              Como dizer 'olá'
            </ListItem>
            <ListItem>
              <ListIcon icon="small-add" color="green.500" />
              Pergunte como alguém está
            </ListItem>
            <ListItem>
              <ListIcon icon="small-add" color="green.500" />
              Diga a alguém o seu nome
            </ListItem>
            <ListItem>
              <ListIcon icon="small-add" color="green.500" />
              Responda a essas perguntas quando perguntado
            </ListItem>
          </List>

          <Text mb={"5%"}>
            Agora que sabemos o que aprenderemos, vamos começar!
          </Text>
        </UnitPanel>
      </Stack>
    </Layout>
  );
};

export default LessonOne;
