import { setupServer } from "msw/node";
import { handlers as productHandler } from "./handlers/productHandler";
import { handlers as customerHandler } from "./handlers/customerHandler";

export const server = setupServer(...productHandler, ...customerHandler);
