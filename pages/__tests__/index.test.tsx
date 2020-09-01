import React from "react";
import { mount } from "enzyme";
import IndexPage from "../index";

describe("index page", () => {
  it("should have IndexPage component", () => {
    const subject = mount(<IndexPage />);

    expect(subject.find("IndexPage")).toHaveLength(1);
  });
});
