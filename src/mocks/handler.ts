import { setupWorker } from "msw";
import { handlers as productHandler } from "./handlers/productHandler";
import { handlers as customerHandler } from "./handlers/customerHandler";

export const worker = setupWorker(...productHandler, ...customerHandler);
