import { cleanup } from "@testing-library/react";

import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { server } from "./src/mocks/serverHandler";
beforeAll(async () => {
  console.log("Starter server test");

  server.listen();
});
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
