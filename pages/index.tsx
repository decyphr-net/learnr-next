import { PrismaClient, Module } from "@prisma/client";
import { Stack } from "@chakra-ui/core";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import { ModulePanel } from "../components/elements/panels";
import { ModuleAsProps } from "./types";

const IndexPage = ({ modules }: ModuleAsProps) => {
  const { t } = useTranslation("common");
  return (
    <Layout
      crumbs={[{ text: "Curso", location: "/", isCurrent: true }]}
      headingText={t("mainheading")}
      title="Curso"
    >
      <Stack spacing={1}>
        {modules.map((module: Module, index: number) => {
          return (
            <ModulePanel
              key={index}
              title={`${module.id}. ${module.title}`}
              description={module.description}
              location={`/lesson/?moduleId=${module.id}`}
            />
          );
        })}
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const prisma = new PrismaClient({ log: ["query"] });
  const modules = await prisma.module.findMany();

  return { props: { modules } };
};

export default IndexPage;
