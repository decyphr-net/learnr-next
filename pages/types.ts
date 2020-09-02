import { Module, Lesson } from "@prisma/client";

export type ModuleAsProps = {
  modules: Array<Module>;
};

export type LessonAsProps = {
  lessons: Array<Lesson>;
};
