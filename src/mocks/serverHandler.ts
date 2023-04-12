import { setupServer } from "msw/node";
import { handlers as productHandler } from "./handlers/productHandler";

export const server = setupServer(...productHandler);
