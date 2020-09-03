import { PrismaClient, Lesson } from "@prisma/client";
import { Stack } from "@chakra-ui/core";
import Layout from "../../../components/Layout";
import { ModulePanel } from "../../../components/elements/panels";

const LessonList = ({ module }: any) => {
  return (
    <Layout
      crumbs={[
        { text: "Curso", location: "/", isCurrent: false },
        { text: module.title, location: "/lessons", isCurrent: true },
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
              location={"/lessons/[moduleId]/[lessonId]/"}
              as={`/lessons/${module.id}/${lesson.id}/`}
            />
          );
        })}
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  console.log(context.query["moduleId"]);
  const prisma = new PrismaClient({ log: ["query"] });
  const module = await prisma.module.findOne({
    where: { id: +context.query["moduleId"] },
    include: { lessons: true },
  });

  return { props: { module } };
};

export default LessonList;
