import { rest } from "msw";
import { getCustomerList } from "../data/customerData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCustomers = () =>
  rest.get(API_BASE_URL + "/customers", (req, res, ctx) => {
    return res(ctx.json(getCustomerList()));
  });

export const handlers = [getCustomers()];
