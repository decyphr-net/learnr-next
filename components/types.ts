import { ReactNode } from "react";
import { Crumb } from "./elements/types";

export type LayoutProps = {
  crumbs: Array<Crumb>;
  headingText: string;
  children?: ReactNode;
  title?: string;
};
