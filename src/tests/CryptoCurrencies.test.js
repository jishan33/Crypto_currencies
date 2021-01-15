import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import CryptoCurrencies from "../components/CryptoCurrencies";
import DatePicker from "react-datepicker";

const flushPromises = () => new Promise(setImmediate);
const waitFor = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

describe("CryptoCurrencies ", () => {
  it("renders CryptoCurrencies component without crashing", () => {
    shallow(<CryptoCurrencies />);
  });

  it("renders DatePicker component without crashing", () => {
    shallow(<DatePicker />);
  });

  test("snapshot renders", () => {
    const component = renderer.create(<CryptoCurrencies />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Test Button component", () => {
  it("Test click event", async () => {
    const wrapper = shallow(<CryptoCurrencies />);
    const button = wrapper.find("button");

    expect(wrapper.find("tbody").exists()).toBe(false);

    button.simulate("click");

    await waitFor(200);

    const tables = wrapper.find("tbody");
    expect(tables).toHaveLength(2);

    expect(tables.at(0).text()).toContain("bitcoin");
    expect(tables.at(1).text()).toContain("ethereum");
  });
});
