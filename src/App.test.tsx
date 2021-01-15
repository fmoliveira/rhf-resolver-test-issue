import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

jest.spyOn(console, "log");

describe("App", () => {
  it("submits form values", async () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText("First Name"), "Bruce");

    expect(console.log).not.toBeCalled();

    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    await screen.findByText("Form submitted");

    expect(console.log).toBeCalledWith({
      firstName: "Bruce",
    });
  });

  it("displays validation errors", async () => {
    render(<App />);

    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    await screen.findByText("Form submitted");

    expect(
      screen.getByText('"firstName" is not allowed to be empty')
    ).toBeInTheDocument();
    expect(console.log).not.toBeCalled();
  });
});
