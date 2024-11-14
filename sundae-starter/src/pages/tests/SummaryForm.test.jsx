import { render, screen } from '@testing-library/react';
import SummaryForm from "../summary/SummaryForm"
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

test("Initial condition", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
    expect(checkbox).not.toBeChecked();

    const confirmBtn = screen.getByRole("button", {name: /confirm order/i});
    expect(confirmBtn).toBeDisabled();
});

test("interaction with checkbox and button", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
    const confirmBtn = screen.getByRole("button", {name: /confirm order/i});

    await user.click(checkbox); // we should use await every time we use user event in order the action to have been completed
    expect(confirmBtn).toBeEnabled();

    await user.click(checkbox);
    expect(confirmBtn).toBeDisabled();
});

test("Popover response to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // popover starts hidden
    // if no match query will return null
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouse over of checkbox label
    const termsBtn = screen.getByText(/terms and conditions/i);  
    await user.hover(termsBtn);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when mouse out
    await user.unhover(termsBtn);
    expect(popover).not.toBeInTheDocument();


})