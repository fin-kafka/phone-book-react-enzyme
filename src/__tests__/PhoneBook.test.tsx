import React from "react";
import PhoneBook from "../components/PhoneBook";
import { shallow } from "enzyme";

let wrapper: any;

describe("PhoneBook", () => {
  beforeEach(() => {
    wrapper = shallow(<PhoneBook></PhoneBook>);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toBeNull();
  });
});
