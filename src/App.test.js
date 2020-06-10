import React from "react";
import { render, wait, queries } from "@testing-library/react";
import App from "./App";
jest.mock("./components/Map.js", () => () => <div></div>);
jest.mock("./components/Camera.js", () => () => <div></div>);

describe("App", () => {
  function renderApp() {
    return render(<App />);
  }
  it("starts on welcome screen", async () => {
    const { ...queries } = renderApp();
    await wait(() => {
      expect(queries.getByText("Welcome Pedestrian!")).toBeTruthy();
    });
  });
});
