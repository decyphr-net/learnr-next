import { ReactNode } from "react";
import { ICrumb } from "./elements/interfaces";

export interface ILayoutProps {
  crumbs: Array<ICrumb>;
  headingText: string;
  children?: ReactNode;
  title?: string;
}
