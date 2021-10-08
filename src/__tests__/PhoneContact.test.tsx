import React from "react";
import PhoneContact from "../components/PhoneContact";
import { shallow } from "enzyme";

let wrapper: any;
const deleteContact = jest.fn();

describe("PhoneContact", () => {
  beforeEach(() => {
    wrapper = shallow(
      <PhoneContact
        updateContact={() => {}}
        contact={{ name: "John", phone: "123", id: 3 }}
        deleteContact={deleteContact}
      ></PhoneContact>
    );
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toBeNull();
  });
  it("inputs should react on change event", () => {
    expect(wrapper.find(".phone-contact-name").props().value).toEqual("John");
    wrapper.find(".phone-contact-name").simulate("change", {
      target: { value: "new user name" },
    });
    expect(wrapper.find(".phone-contact-name").props().value).toEqual(
      "new user name"
    );

    expect(wrapper.find(".phone-contact-phone").props().value).toEqual("123");
    wrapper.find(".phone-contact-phone").simulate("change", {
      target: { value: "new user phone" },
    });
    expect(wrapper.find(".phone-contact-phone").props().value).toEqual(
      "new user phone"
    );
  });
  it("should call deleteContact function on click", () => {
    expect(deleteContact).toBeCalledTimes(0);
    wrapper.find(".phone-contact-delete").simulate("click");
    expect(deleteContact).toBeCalledTimes(1);
  });
});
