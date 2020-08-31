import { ReactNode } from "react";

export type TextComponentProps = {
  children: ReactNode;
  isFirst?: boolean;
};

export type ListComponentProps = {
  listContents: Array<string>;
};

export type PopupExplainerProps = {
  explainerTriggerText: string;
  explainerHeader: string;
  literalTranslation: string;
};
