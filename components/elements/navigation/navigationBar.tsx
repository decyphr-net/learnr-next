/**
 * The main navigation bar that user's will use to navigate around
 * the site
 */
import Link from "next/link";
import {
  Box,
  Flex,
  Link as ChakraLink,
  Image,
  Text,
  useTheme,
} from "@chakra-ui/core";
import { INavLinkProps } from "./interfaces";

const NavLink = ({ children, ...props }: INavLinkProps) => {
  const theme = useTheme();
  return (
    <ChakraLink px={2} color={theme.colors.gray[100]} {...props}>
      <Link href={props.to}>{children}</Link>
    </ChakraLink>
  );
};

const Nav = () => {
  const theme = useTheme();
  return (
    <Flex
      bg={theme.colors.gray[800]}
      w={theme.sizes.full}
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
          size={30}
        />
        <Text pl={3} color={theme.colors.white}>
          Company
        </Text>
      </Flex>

      <Box>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
        <NavLink to="/">
          <a>About</a>
        </NavLink>
        <NavLink to="/">
          <a>Contact</a>
        </NavLink>
      </Box>
    </Flex>
  );
};

export default Nav;
