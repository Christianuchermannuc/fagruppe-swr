import { FormRow, Input } from "@dnb/eufemia";

import { useState } from "react";
import { Customer } from "../types/customer";
import CustomerSearchDialog from "./customerSearchDialog";

type Props = {
  onSelectedCustomerHandler?: (selected: Customer) => void;
  label1Value?: string;
  label2Value?: string;
};

export default function CustomerSearchForm(props: Props) {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  const onSelectedCustomer = (selectedItem: Customer) => {
    setSelectedCustomer(selectedItem);
    if (props.onSelectedCustomerHandler)
      props.onSelectedCustomerHandler(selectedItem);
  };

  return (
    <>
      <FormRow>
        <CustomerSearchDialog
          onSelectedCustomerHandler={(e) => onSelectedCustomer(e)}
        />
      </FormRow>
    </>
  );
}
