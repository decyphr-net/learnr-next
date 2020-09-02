import { PrismaClient, Lesson } from "@prisma/client";
import { Stack } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import { ModulePanel } from "../../components/elements/panels";

const LessonList = ({ module }: any) => {
  return (
    <Layout
      crumbs={[
        { text: "Curso", location: "/", isCurrent: false },
        { text: "Apresentações", location: "/lesson", isCurrent: true },
      ]}
      headingText={module.displayTitle}
      title={`Curso | ${module.title}`}
    >
      <Stack spacing={1}>
        {module.lessons.map((lesson: Lesson, index: number) => {
          return (
            <ModulePanel
              key={index}
              title={`${lesson.displayTitle}`}
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
  const module = await prisma.module.findOne({
    where: { id: +query.moduleId },
    include: { lessons: true },
  });

  return { props: { module } };
};

export default LessonList;
