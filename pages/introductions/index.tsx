import { Stack } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import { ModulePanel } from "../../components/elements/panels";

const Introductions = () => {
  return (
    <Layout
      crumbs={[
        { text: "Curso", location: "/", isCurrent: false },
        { text: "Apresentações", location: "introductions", isCurrent: true },
      ]}
      headingText="1. Apresentações"
      title="Curso | Apresentações"
    >
      <Stack spacing={1}>
        <ModulePanel
          title={"a. Olá! Meu nome é..."}
          description={
            "Nesta lição, veremos como falar um pouco sobre nós mesmos."
          }
          location={"/introductions/introduction"}
        />

        <ModulePanel
          title={"b. Prazer em conhecê-lo!"}
          description={"Nesta lição, veremos como nos apresentar."}
          location={"/introductions"}
        />
        <ModulePanel
          title={"c. Ser e Estar"}
          description={
            "Nesta lição, aprenderemos como nos descrever usando 'ser' e 'estar'."
          }
          location={"/introductions"}
        />
        <ModulePanel
          title={"d. Quantos anos você tem?"}
          description={
            "Nesta lição, aprenderemos como falar sobre idade. Veremos alguns números, bem como meses e dias da semana."
          }
          location={"/introductions"}
        />
        <ModulePanel
          title={"e. Contrações"}
          description={
            "Nesta lição, aprenderemos como usar as contrações comuns no idioma inglês."
          }
          location={"/introductions"}
        />
      </Stack>
    </Layout>
  );
};

export default Introductions;
