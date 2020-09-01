const NextI18Next = require("next-i18next").default;
const path = require("path");

const localeSubpaths = {};

module.exports = new NextI18Next({
  language: ["en", "pt"],
  otherLanguages: ["pt"],
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
});
