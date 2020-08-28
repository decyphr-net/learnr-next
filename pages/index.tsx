import { Heading, Stack } from "@chakra-ui/core";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import { ModulePanel } from "../components/elements/panels";

const IndexPage = () => {
  const { t } = useTranslation("common");
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Heading as="h1" size="xl" pl={"12.5%"} mt={{ xs: "7.5%", md: "1.5%" }}>
        {t("mainheading")}
      </Heading>

      <Stack spacing={1} px={"12.5%"}>
        <ModulePanel
          title={"1. Apresentações"}
          description={
            "Aprenda como se apresentar, cumprimentar outras pessoas e usar 'estar' e 'ser' em inglês"
          }
        />
        <ModulePanel
          title={"2. Letras e Numeros"}
          description={
            "Aprenda o alfabeto inglês e familiarize-se com alguns números em inglês"
          }
        />
        <ModulePanel
          title={"3. Conheça a família"}
          description={
            "Aprenda a falar sobre sua família e apresente seus familiares"
          }
        />
        <ModulePanel
          title={"4. Como foi o seu dia?"}
          description={
            "Aprenda sobre as rotinas diárias e conte às pessoas sobre o seu dia"
          }
        />
        <ModulePanel
          title={"5. O que vamos fazer neste fim de semana?"}
          description={
            "Aprenda a fazer planos futuros com amigos, familiares e colegas de trabalho"
          }
        />
      </Stack>
    </Layout>
  );
};

export default IndexPage;
