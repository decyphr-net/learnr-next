import { PrismaClient, Lesson } from "@prisma/client";
import { Stack } from "@chakra-ui/core";
import Layout from "../../../../components/Layout";
import { ModulePanel } from "../../../../components/elements/panels";

const UnitList = ({ lesson }: any) => {
  return (
    <Layout
      crumbs={[
        { text: "Curso", location: "/", isCurrent: false },
        { text: lesson.title, location: "/lessons", isCurrent: true },
      ]}
      headingText={lesson.displayTitle}
      title={`Curso | ${lesson.title}`}
    >
      <Stack spacing={1}>
        {lesson.units.map((unit: any, index: number) => {
          return (
            <ModulePanel
              key={index}
              title={`${unit.displayTitle}`}
              description={unit.title}
              location={"/lessons/[moduleId]/[lessonId]/[unitId]"}
              as={`/lessons/${lesson.moduleId}/${lesson.id}/${unit.id}`}
            />
          );
        })}
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const prisma = new PrismaClient({ log: ["query"] });
  const lesson = await prisma.lesson.findOne({
    where: { id: +context.query["lessonId"] },
    include: { units: true },
  });

  return { props: { lesson } };
};

export default UnitList;
