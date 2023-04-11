import { render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomerPage from ".";

describe("Charge items Catalogue", () => {
  it("Expect table table to be defined and have 2 rows intially", async () => {
    render(
      <MemoryRouter>
        <CustomerPage />
      </MemoryRouter>
    );
    const header = screen.getByRole("heading");
    screen.debug(undefined, 9999999);
  });
});
