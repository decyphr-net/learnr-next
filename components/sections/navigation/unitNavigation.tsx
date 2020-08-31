/**
 * The navigation icons that are used to move a student backwards and forwards
 * throughout the course material. These are the chevrons that will appear at
 * the end of a learning unit
 */
import NextLink from "next/link";
import { Link, Icon } from "@chakra-ui/core";
import { NavChevronsProps } from "./types";

/**
 * The NavChevron component will simply render a link with a chevron.
 *
 * The two props that will be passed to this compoent will be the location
 * that the link will bring the user to, and the direction that will determine
 * which chevron will be used. Left will indicate `previous` and right will
 * indicate `next`.
 *
 * @param props (NavChevronsProps): The NavChevronsProps
 */
const NavChevron = ({ location, direction }: NavChevronsProps) => (
  <NextLink href={location}>
    <Link m={"auto"}>
      <Icon name={`chevron-${direction}`} />
    </Link>
  </NextLink>
);

export default NavChevron;
