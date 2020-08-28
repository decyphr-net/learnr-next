import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/core";
import { ICrumbsProps } from "./interfaces";

export const Crumbs = ({ crumbs }: ICrumbsProps) => (
  <Breadcrumb
    spacing="8px"
    separator={<Icon color="gray.300" name="chevron-right" />}
  >
    {crumbs.map((crumb, index: number) => {
      return (
        <BreadcrumbItem key={index} isCurrentPage={crumb.isCurrent}>
          <BreadcrumbLink href={crumb.location}>{crumb.text}</BreadcrumbLink>
        </BreadcrumbItem>
      );
    })}
  </Breadcrumb>
);
