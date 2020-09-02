import JsxParser from "react-jsx-parser";
import { TextComponent, ListComponent } from "../../components/unit/text";
import { PopupExplainer } from "../../components/unit/explainer";
import { UnitContentProps } from "./types";

const UnitContent = ({ content }: UnitContentProps) => (
  <JsxParser
    components={{ TextComponent, ListComponent, PopupExplainer }}
    jsx={`${content}`}
  />
);

export default UnitContent;
