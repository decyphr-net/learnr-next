/**
 * Defines the prop interfaces for each the navigation components that
 * prop definitions
 */
import { ReactNode } from "react";

/**
 * Interface definition for the NavLink component
 */
export interface INavLinkProps {
  children: ReactNode;
  to: string;
}

export interface IModulePanelProps {
  title: string;
  description: string;
}
