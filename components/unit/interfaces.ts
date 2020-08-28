import { ReactNode } from "react";

export interface ITextComponentProps {
  children: ReactNode;
  isFirst?: boolean;
}

export interface IListComponentProps {
  listContents: Array<string>;
}
