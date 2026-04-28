import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

test("renders vite text", () => {
  render(<App />);
  const elements = screen.getAllByText(/vite/i); // ✅ FIX HERE
  expect(elements.length).toBeGreaterThan(0);
});