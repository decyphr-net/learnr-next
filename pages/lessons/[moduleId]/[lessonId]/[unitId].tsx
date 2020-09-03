import { PrismaClient } from "@prisma/client";
import { Stack, Flex } from "@chakra-ui/core";
import Layout from "../../../../components/Layout";
import NavChevron from "../../../../components/sections/navigation/unitNavigation";
import { UnitPanel } from "../../../../components/elements/panels";
import UnitContent from "../../../../components/unit/content";

const LessonOne = (props: any) => {
  return (
    <Layout
      crumbs={[
        { text: "Curso", location: "/", isCurrent: false },
        {
          text: props.unit.lesson.module.title,
          location: `/lessons/${props.unit.lesson.module.id}`,
          isCurrent: false,
        },
        {
          text: props.unit.lesson.title,
          location: `/lessons/${props.unit.lesson.module.id}/${props.unit.lessonId}`,
          isCurrent: false,
        },
        {
          text: props.unit.title,
          location: `/lessons/${props.unit.lesson.module.id}/${props.unit.lessonId}/${props.unit.id}`,
          isCurrent: true,
        },
      ]}
      headingText={props.unit.displayTitle}
      title={`Curso | ${props.unit.lesson.module.title} | ${props.unit.title}`}
    >
      <Stack spacing={1}>
        <UnitPanel title="">
          <UnitContent content={props.unit.contents} />
        </UnitPanel>
      </Stack>
      <Flex>
        {props.unit.id !== 1 && (
          <NavChevron
            location={`/lessons/${props.unit.lesson.module.id}/${
              props.unit.lessonId
            }/${props.unit.id - 1}`}
            direction="left"
          />
        )}
        <NavChevron
          location={`/lessons/${props.unit.lesson.module.id}/${
            props.unit.lessonId
          }/${props.unit.id + 1}`}
          direction="right"
        />
      </Flex>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const prisma = new PrismaClient({ log: ["query"] });
  const unit = await prisma.unit.findOne({
    where: { id: +context.query["unitId"] },
    include: {
      lesson: {
        select: {
          id: true,
          title: true,
          module: true,
        },
      },
    },
  });

  return { props: { unit } };
};

export default LessonOne;
