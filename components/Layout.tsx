import React from "react";
import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/core";
import Nav from "./sections/navigation/navigationBar";
import { CourseHeading } from "./sections/pageHeaders/headers";
import Footer from "./sections/footer/footer";
import { LayoutProps } from "./types";

const Layout = ({ crumbs, headingText, children, title }: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    <SimpleGrid columns={1} spacing={"1.75rem"} m={"12.5%"}>
      <CourseHeading crumbs={crumbs} headingText={headingText} />
      {children}
    </SimpleGrid>
    <Footer />
  </div>
);

export default Layout;
