import { rest } from "msw";
import { Product } from "../../types/product";
import { addNewProduct, getProductList } from "../data/productsData";

const API_BASE_URL = import.meta.env.API_BASE_URL;
export const getProducts = () =>
  rest.get(API_BASE_URL + "/products", (req, res, ctx) => {
    return res(ctx.json(getProductList()));
  });

export const postProduct = () =>
  rest.post("http://localhost:5001/products", async (req, res, ctx) => {
    const newProduct: Product = await req.json();
    await addNewProduct(newProduct);
    return res(ctx.json(newProduct));
  });

export const handlers = [getProducts(), postProduct()];
