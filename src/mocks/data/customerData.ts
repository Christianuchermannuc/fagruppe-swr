import { Customer } from "../../types/customer";

let customerList: Customer[] = [
  ...new Array(20).fill(0).map((_, i) => {
    return {
      id: (i + 1).toString(),
      customerName: "Customer" + (i + 1),
    };
  }),
];

export const getCustomerList = () => {
  return customerList;
};
