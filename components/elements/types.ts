/**
 * Defines the prop interfaces for each the navigation components that
 * prop definitions
 */
import { ReactNode } from "react";

/**
 * Interface definition for the NavLink component
 */
export type NavLinkProps = {
  children: ReactNode;
  to: string;
};

export type ModulePanelProps = {
  title: string;
  description: string;
  location: string;
  as: string;
};

export type UnitPanelProps = {
  title: string;
  children: ReactNode;
};

export type HeadingProps = {
  text: string;
};

export type Crumb = {
  text: string;
  location: string;
  isCurrent: boolean;
};

export type CrumbsProps = {
  crumbs: Array<Crumb>;
};
