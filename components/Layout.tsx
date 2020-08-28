import React, { ReactNode } from "react";
import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/core";
import Nav from "./sections/navigation/navigationBar";
import Footer from "./sections/footer/footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    <SimpleGrid columns={1} spacing={"1.75rem"}>
      {children}
    </SimpleGrid>
    <Footer />
  </div>
);

export default Layout;
