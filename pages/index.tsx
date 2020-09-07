import { PrismaClient, Module } from "@prisma/client";
import { Stack } from "@chakra-ui/core";
import { useTranslation } from "react-i18next";
import getSessionOrRedirect from "../utils/auth/session";
import Layout from "../components/Layout";
import { ModulePanel } from "../components/elements/panels";

const IndexPage = (props: any) => {
  const { t } = useTranslation("common");
  return (
    <Layout
      crumbs={[{ text: "Curso", location: "/", isCurrent: true }]}
      headingText={t("mainheading")}
      title="Curso"
    >
      <Stack spacing={1}>
        {props.modules.map((module: Module, index: number) => {
          return (
            <ModulePanel
              key={index}
              title={`${module.displayTitle}`}
              description={module.description}
              location={"/lessons/[moduleId]"}
              as={`/lessons/${module.id}/`}
            />
          );
        })}
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async ({ req, res }: any) => {
  const prisma = new PrismaClient({ log: ["query"] });
  const modules = await prisma.module.findMany();

  let session: any = await getSessionOrRedirect(req, res);

  return { props: { modules, session } };
};

export default IndexPage;
