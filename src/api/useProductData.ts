import { Product } from "../types/product";
import { fetcher } from "./fetcher";
import useSWR, { MutatorOptions } from "swr";
import axios from "axios";

export async function addProduct(addChargeItem: Product) {
  let response = await axios.post("/products", addChargeItem);
  return response.data;
}

export const addProductOptions = (newItem: Product) => {
  const options: MutatorOptions = {
    optimisticData: (chargeItems: Product[]) => [...chargeItems, newItem],
    rollbackOnError: true,
    populateCache: (added: Product, chargeItems: Product[]) => [
      ...chargeItems,
      added,
    ],
    revalidate: false,
  };
  return options;
};

export function useChargeItems(shouldFetch: boolean, queryParams?: string) {
  const {
    data: products,
    mutate,
    isLoading,
  } = useSWR<Product[]>(
    shouldFetch ? `/products/${queryParams}` : null,
    fetcher,
    {
      revalidateOnFocus: true,
    }
  );

  return {
    products,
    isLoading,
    isError: false,
    mutate,
  };
}
