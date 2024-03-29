import { Stack } from "@chakra-ui/core";
import getSessionOrRedirect from "../utils/auth/session";
import Layout from "../components/Layout";
import { ModulePanel } from "../components/elements/panels";

const IndexPage = (props: any) => {
  return (
    <Layout
      crumbs={[{ text: "Curso", location: "/", isCurrent: true }]}
      headingText="Curso"
      title="Curso"
    >
      <Stack spacing={1}>
        <ModulePanel
          title={"1. Apresentações"}
          description={
            "Aprenda como se apresentar, cumprimentar outras pessoas e usar 'estar' e 'ser' em inglês"
          }
          location={"/introductions"}
          as={`/introductions`}
        />

        <ModulePanel
          title={"2. Letras e Numeros"}
          description={
            "Aprenda o alfabeto inglês e familiarize-se com alguns números em inglês"
          }
          location={"/introductions/"}
          as={`/lessons/2/`}
        />
        <ModulePanel
          title={"3. Conheça a família"}
          description={
            "Aprenda a falar sobre sua família e apresente seus familiares"
          }
          location={"/introductions/"}
          as={`/lessons/3/`}
        />
        <ModulePanel
          title={"4. Como foi o seu dia?"}
          description={
            "Aprenda sobre as rotinas diárias e conte às pessoas sobre o seu dia"
          }
          location={"/introductions/"}
          as={`/lessons/4/`}
        />
        <ModulePanel
          title={"5. O que vamos fazer neste fim de semana?"}
          description={
            "Aprenda a fazer planos futuros com amigos, familiares e colegas de trabalho"
          }
          location={"/introductions/"}
          as={`/lessons/5/`}
        />
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async ({ req, res }: any) => {
  let session: any = await getSessionOrRedirect(req, res);

  return { props: { session } };
};

export default IndexPage;
