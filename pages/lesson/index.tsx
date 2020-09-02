import { PrismaClient, Lesson } from "@prisma/client";
import { Stack } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import { ModulePanel } from "../../components/elements/panels";
import { LessonAsProps } from "../types";

const Introductions = ({ lessons }: LessonAsProps) => {
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
        {lessons.map((lesson: Lesson, index: number) => {
          return (
            <ModulePanel
              key={index}
              title={`${lesson.title}`}
              description={lesson.description}
              location={"/introductions/"}
            />
          );
        })}
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const prisma = new PrismaClient({ log: ["query"] });
  const lessons = await prisma.lesson.findMany({
    where: { moduleId: +query.moduleId },
  });

  return { props: { lessons } };
};

export default Introductions;
