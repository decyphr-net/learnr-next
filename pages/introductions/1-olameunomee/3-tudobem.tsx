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
      headingText="iii. Tudo Bem"
      title="Curso | iii. Tudo Bem"
    >
      <Stack spacing={1}>
        <UnitPanel title="">
          <TextComponent isFirst>
            Agora que passamos algum tempo procurando maneiras diferentes de
            dizer 'olá' em inglês, podemos prosseguir para ver como podemos
            perguntar 'tudo bem'.
          </TextComponent>
          <TextComponent>
            A forma mais comum de perguntar 'tudo bem' provavelmente seria{" "}
            <PopupExplainer
              explainerTriggerText="how are you?"
              explainerHeader="How are you?"
              literalTranslation="como vai você? ou como você está?"
            />{" "}
            ou{" "}
            <PopupExplainer
              explainerTriggerText="how are things?"
              explainerHeader="How are things?"
              literalTranslation="como estão as coisas?"
            />
            .{" "}
            <HeadsUpText>
              Se você encontrar algo que ainda não tenhamos abordado, nós o
              trataremos. Tente ouvir os sons e a aparência e verifique a
              tradução para aprender um pouco mais
            </HeadsUpText>
          </TextComponent>
          <TextComponent>
            <PopupExplainer
              explainerTriggerText="How are you?"
              explainerHeader="How are you?"
              literalTranslation="Como está?"
            />{" "}
            provavelmente seria o mais comum, e é mais formal.{" "}
            <PopupExplainer
              explainerTriggerText="how are things?"
              explainerHeader="How are things?"
              literalTranslation="como estão as coisas?"
            />{" "}
            é um pouco mais informal. Também temos frases adicionais. Por
            exemplo, se estiver encontrando um amigo, você pode dizer{" "}
            <PopupExplainer
              explainerTriggerText="what's up?"
              explainerHeader="What's up?"
              literalTranslation="E aí?"
            />{" "}
            (você também pode ouvir ou ver a forma abreviada{" "}
            <PopupExplainer
              explainerTriggerText="'s up?"
              explainerHeader="What's up?"
              literalTranslation="E aí?"
            />
            ), ou em uma situação mais formal, por exemplo, no início de um
            e-mail de um colega você pode ver{" "}
            <PopupExplainer
              explainerTriggerText="I hope you are well"
              explainerHeader="I hope you are well"
              literalTranslation="Espero que você esteja bem"
            />{" "}
            ou{" "}
            <PopupExplainer
              explainerTriggerText="I trust that everything is going well for you'"
              explainerHeader="I trust that everything is going well for you"
              literalTranslation="Espero que tudo está indo bem para você"
            />
            .
          </TextComponent>
          <TextComponent>
            Ok, agora que sabemos algumas das perguntas, vamos dar uma olhada em
            algumas respostas.
          </TextComponent>{" "}
          <TextComponent>
            Se alguém disser{" "}
            <PopupExplainer
              explainerTriggerText="Hi, how are you?"
              explainerHeader="Hi, how are you?"
              literalTranslation="Oi, como você está?"
            />{" "}
            como você responderia? Temos várias opções. A mais direta seria{" "}
            <PopupExplainer
              explainerTriggerText="Hi, I'm good, thanks. And you?"
              explainerHeader="Hi, I'm good, thanks. And you?"
              literalTranslation="Oi, estou bem, obrigado. Vocês?"
            />
            . Essa resposta pode ter várias permutações. Vamos em alguns deles.
          </TextComponent>{" "}
          <TextComponent>
            <PopupExplainer
              explainerTriggerText="Hi, I am good, thank you. How are you?"
              explainerHeader="Hi, I am good, thank you. How are you?"
              literalTranslation="Oi, estou bem, obrigado. Como você está?"
            />
          </TextComponent>{" "}
          <TextComponent>
            <PopupExplainer
              explainerTriggerText="Hi, I am good, thank you. And you?"
              explainerHeader="Hi, I am good, thank you. And you?"
              literalTranslation="Oi, estou bem, obrigado. E você?"
            />
          </TextComponent>{" "}
          <TextComponent>
            <PopupExplainer
              explainerTriggerText="Hey, I'm good thanks. You?"
              explainerHeader="Hey, I'm good thanks. You?"
              literalTranslation="Oi, estou bem, obrigado. Você?"
            />
          </TextComponent>{" "}
          <TextComponent>
            <PopupExplainer
              explainerTriggerText="I'm very good, and you?"
              explainerHeader="I'm very good, and you?"
              literalTranslation="Estou muito bem e você?"
            />
          </TextComponent>{" "}
          <TextComponent>
            Dependendo da situação, a maioria deles será intercambiável. Você
            nem sempre precisa se preocupar muito em ter certeza de dizer uma
            resposta específica e, em alguns casos, não precisa dizer 'olá', mas
            algumas das últimas opções na lista podem ser um tanto informais.
          </TextComponent>
        </UnitPanel>
      </Stack>
      <Flex>
        <NavChevron
          location="/introductions/1-olameunomee/2-ola"
          direction="left"
        />
        <NavChevron
          location="/introductions/1-olameunomee/4-meunomee"
          direction="right"
        />
      </Flex>
    </Layout>
  );
};

export default Unit;
