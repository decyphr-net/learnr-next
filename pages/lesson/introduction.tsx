import { Stack, Flex } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import NavChevron from "../../components/sections/navigation/unitNavigation";
import { UnitPanel } from "../../components/elements/panels";
import UnitContent from "../../components/unit/content";

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
          location: "/introductions/introduction",
          isCurrent: true,
        },
      ]}
      headingText="Introdução à aula"
      title="Curso | Apresentações | Introdução à aula"
    >
      <Stack spacing={1}>
        <UnitPanel title={"i. Introdução à aula"}>
          <UnitContent
            content={`<TextComponent isFirst>
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

          <TextComponent>
            Agora que sabemos o que aprenderemos, vamos começar!
          </TextComponent>`}
          />
        </UnitPanel>
      </Stack>
      <Flex>
        <NavChevron location="/introductions/ola" direction="right" />
      </Flex>
    </Layout>
  );
};

export default LessonOne;
