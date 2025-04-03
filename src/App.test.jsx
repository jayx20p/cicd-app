import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("App form submission", async () => {
    render(<App />);

    // Get the email input and submit button
    const emailInput = screen.getByTestId("emailInput");
    const submitButton = screen.getByTestId("submitButton");

    // Type a valid email into the input
    await userEvent.type(emailInput, 'sigmaschool');

    // Check if button is disabled
    expect(submitButton.disabled).toBe(false);
});