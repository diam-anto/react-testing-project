import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from "../summary/SummaryForm"
import { expect } from 'vitest';

test("Initial condition", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
    expect(checkbox).not.toBeChecked();

    const confirmBtn = screen.getByRole("button", {name: /confirm order/i});
    expect(confirmBtn).toBeDisabled();
});

test("interaction with checkbox and button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
    const confirmBtn = screen.getByRole("button", {name: /confirm order/i});

    fireEvent.click(checkbox);
    expect(confirmBtn).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmBtn).toBeDisabled();
})