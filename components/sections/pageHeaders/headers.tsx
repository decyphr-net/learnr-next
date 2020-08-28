import { H1 } from "../../elements/headings";
import { Crumbs } from "../../elements/breadcrumbs";
import { ICourseHeadingProps } from "./interfaces";

export const CourseHeading = ({ crumbs, headingText }: ICourseHeadingProps) => (
  <>
    <Crumbs crumbs={crumbs} />
    <H1 text={headingText} />
  </>
);
