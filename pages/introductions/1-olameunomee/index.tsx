import { Stack } from "@chakra-ui/core";
import getSessionOrRedirect from "@utils/auth/session";
import Layout from "@components/Layout";
import { ModulePanel } from "@components/elements/panels";

const Lesson = (props: any) => {
  return (
    <Layout
      crumbs={[{ text: "Curso", location: "/", isCurrent: true }]}
      headingText="Curso"
      title="Curso"
    >
      <Stack spacing={1}>
        <ModulePanel
          title={"i. Introdução à aula"}
          description={"Introdução à aula"}
          location={"/introductions/1-olameunomee/1-introducaoaaula"}
          as={`/introductions/1-olameunomee/1-introducaoaaula`}
        />
        <ModulePanel
          title={"ii. Ola"}
          description={"Ola"}
          location={"/introductions/1-olameunomee/2-ola"}
          as={`/introductions/1-olameunomee/2-ola`}
        />
        <ModulePanel
          title={"iii. Tudo Bem"}
          description={"Tudo Bem"}
          location={"/introductions/1-olameunomee/3-tudobem"}
          as={`/introductions/1-olameunomee/3-tudobem`}
        />
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async ({ req, res }: any) => {
  let session: any = await getSessionOrRedirect(req, res);

  return { props: { session } };
};

export default Lesson;
