import { Stack } from "@chakra-ui/core";
import getSessionOrRedirect from "@utils/auth/session";
import Layout from "@components/Layout";
import { ModulePanel } from "@components/elements/panels";

const Introductions = (props: any) => {
  return (
    <Layout
      crumbs={[{ text: "Curso", location: "/", isCurrent: true }]}
      headingText="Curso"
      title="Curso"
    >
      <Stack spacing={1}>
        <ModulePanel
          title={"a. Olá! Meu nome é..."}
          description={
            "Nesta lição, veremos como falar um pouco sobre nós mesmos."
          }
          location={"/introductions/1-olameunomee/"}
          as={`/introductions/1-olameunomee/`}
        />
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async ({ req, res }: any) => {
  let session: any = await getSessionOrRedirect(req, res);

  return { props: { session } };
};

export default Introductions;
