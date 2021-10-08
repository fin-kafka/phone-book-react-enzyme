import React from "react";
import PhoneNewContact from "../components/PhoneNewContact";
import { shallow } from "enzyme";

let wrapper: any;
const addNewContact = jest.fn();

describe("PhoneNewContact", () => {
  beforeEach(() => {
    wrapper = shallow(
      <PhoneNewContact addNewContact={addNewContact}></PhoneNewContact>
    );
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toBeNull();
  });
  it("inputs should react on change event", () => {
    expect(wrapper.find(".phone-new-contact-name").props().value).toEqual("");
    wrapper.find(".phone-new-contact-name").simulate("change", {
      target: { value: "new user name" },
    });
    expect(wrapper.find(".phone-new-contact-name").props().value).toEqual(
      "new user name"
    );

    expect(wrapper.find(".phone-new-contact-phone").props().value).toEqual("");
    wrapper.find(".phone-new-contact-phone").simulate("change", {
      target: { value: "456456456" },
    });
    expect(wrapper.find(".phone-new-contact-phone").props().value).toEqual(
      "456456456"
    );
  });
  it("should call addNewContact function on click", () => {
    expect(addNewContact).toBeCalledTimes(0);
    wrapper.find("button").simulate("click");
    expect(addNewContact).toBeCalledTimes(1);
  });
});
