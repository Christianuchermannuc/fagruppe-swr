import { Customer } from "../types/customer";
import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useCustomerData(shouldFetch: boolean, queryParams?: string) {
  const {
    data: customers,
    mutate,
    isLoading,
  } = useSWR<Customer[]>(
    shouldFetch ? `/customers/${queryParams}` : null,
    fetcher
  );

  return {
    customers,
    isLoading,
    isError: false,
    mutate,
  };
}
