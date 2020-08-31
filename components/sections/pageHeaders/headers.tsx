import { H1 } from "../../elements/headings";
import { Crumbs } from "../../elements/breadcrumbs";
import { CourseHeadingProps } from "./types";

export const CourseHeading = ({ crumbs, headingText }: CourseHeadingProps) => (
  <>
    <Crumbs crumbs={crumbs} />
    <H1 text={headingText} />
  </>
);
