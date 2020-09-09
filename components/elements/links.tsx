import { Link } from "@chakra-ui/core";
import NextLink from "next/link";
import { NavLinkProps } from "./types";

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <NextLink href={props.to}>
      <Link
        px={2}
        color="gray.100"
        mt={{ base: 4, md: 0 }}
        mr={6}
        display="block"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};
