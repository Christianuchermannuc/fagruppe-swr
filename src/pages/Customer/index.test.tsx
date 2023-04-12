import { render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomerPage from ".";
import userEvent from "@testing-library/user-event";

describe("Customer", () => {
  it("Expect table table to be defined and have 2 rows intially", async () => {
    render(
      <MemoryRouter>
        <CustomerPage />
      </MemoryRouter>
    );
    const diaolgButton = screen.getByRole("button", { name: /search/i });

    await userEvent.click(diaolgButton);

    const dialog = await screen.getByRole("dialog");

    expect(dialog).toBeDefined();

    const buttonSearchForCustomers = within(dialog).getByRole("button", {
      name: /search/i,
    });
    expect(buttonSearchForCustomers).toBeDefined();

    await userEvent.click(buttonSearchForCustomers);

    expect(
      await screen.findByRole("table", undefined, { timeout: 3000 })
    ).toBeDefined();

    const customerRows = await screen.getAllByRole("row");

    expect(customerRows.length).toBeGreaterThan(2);

    const row = customerRows[1];

    const rowButtonSelectCustomer = within(row).getByRole("button");

    await userEvent.click(rowButtonSelectCustomer);

    const infoCardForSelectedCustomer = screen.getByTestId("info-card");
    expect(infoCardForSelectedCustomer).toBeDefined();
    screen.debug(undefined, 9999999);
  });
});
