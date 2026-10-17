
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("React CI/CD application", () => {
  it("renders the application heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "React GitHub Actions Pipeline",
      })
    ).toBeInTheDocument();
  });

  it("shows the running status", () => {
    render(<App />);

    expect(
      screen.getByText("Application is running")
    ).toBeInTheDocument();
  });

  it("increments the counter when clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: "Test React: 0",
    });

    fireEvent.click(button);

    expect(
      screen.getByRole("button", { name: "Test React: 1" })
    ).toBeInTheDocument();
  });
});
