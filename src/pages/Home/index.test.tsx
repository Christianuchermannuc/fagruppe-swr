import { render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from ".";
import { getProducts } from "../../mocks/handlers/productHandler";

import { server } from "../../mocks/serverHandler";

describe("Product", () => {
  it("Expect table table to be defined and have 2 rows intially", async () => {
    server.use(getProducts());
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const table = await screen.findByRole("table");
    screen.debug(undefined, 9999999);
  });
});
