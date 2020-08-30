import { ReactNode } from "react";

export interface ITextComponentProps {
  children: ReactNode;
  isFirst?: boolean;
}

export interface IListComponentProps {
  listContents: Array<string>;
}

export interface IPopupExplainerProps {
  explainerTriggerText: string;
  explainerHeader: string;
  literalTranslation: string;
  space?: boolean;
}
