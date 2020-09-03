import JsxParser from "react-jsx-parser";
import {
  TextComponent,
  ListComponent,
  HeadsUpText,
} from "../../components/unit/text";
import { PopupExplainer } from "../../components/unit/explainer";
import { UnitContentProps } from "./types";

const UnitContent = ({ content }: UnitContentProps) => (
  <JsxParser
    components={{ TextComponent, ListComponent, HeadsUpText, PopupExplainer }}
    jsx={`${content}`}
  />
);

export default UnitContent;
