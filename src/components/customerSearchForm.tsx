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
        <Input
          right="small"
          disabled
          value={selectedCustomer?.id}
          label_direction="vertical"
          label={props?.label1Value ?? ""}
          placeholder=""
        />
        <Input
          label={props?.label2Value ?? ""}
          label_direction="vertical"
          autocomplete="on"
          right="small"
          disabled
          value={selectedCustomer?.customerName}
        />
        <CustomerSearchDialog
          onSelectedCustomerHandler={(e) => onSelectedCustomer(e)}
        />
      </FormRow>
    </>
  );
}
