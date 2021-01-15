import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import CryptoCurrencies from "./components/CryptoCurrencies";

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
});

test("readers routers", () => {
  const content = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
