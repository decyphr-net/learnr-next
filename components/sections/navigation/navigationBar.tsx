/**
 * The main navigation bar that user's will use to navigate around
 * the site
 */
import { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/core";
import { useTranslation } from "react-i18next";
import { NavLink } from "../../elements/links";

const Nav = () => {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.800"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Learnr
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ xs: show ? "block" : "none", md: "flex" }}
        width={{ xs: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <NavLink to="/">{t("home")}</NavLink>
        <NavLink to="/">{t("about")}</NavLink>
        <NavLink to="/">{t("contact")}</NavLink>
      </Box>

      <Box
        display={{ xs: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
    </Flex>
  );
};

export default Nav;
