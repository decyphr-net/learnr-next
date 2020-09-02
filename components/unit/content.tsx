import JsxParser from "react-jsx-parser";
import { TextComponent, ListComponent } from "../../components/unit/text";
import { PopupExplainer } from "../../components/unit/explainer";

const UnitContent = ({ content }: any) => (
  <JsxParser
    components={{ TextComponent, ListComponent, PopupExplainer }}
    jsx={`${content}`}
  />
);

export default UnitContent;
