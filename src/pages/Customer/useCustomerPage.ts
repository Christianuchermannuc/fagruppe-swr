import { useState } from "react";
import { Customer } from "../../types/customer";

export const useCustomerPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

  const onSelectedCustomer = (selectedItem: Customer) => {
    setSelectedCustomer(selectedItem);
  };
  return { onSelectedCustomer, selectedCustomer };
};
