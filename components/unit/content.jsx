import JsxParser from "react-jsx-parser";
import { TextComponent, ListComponent, HeadsUpText } from "./text";
import { PopupExplainer } from "./explainer";

const UnitContent = ({ content }) => (
  <JsxParser
    components={{ TextComponent, ListComponent, HeadsUpText, PopupExplainer }}
    jsx={`${content}`}
  />
);

export default UnitContent;
