import {
  Button,
  Dialog,
  FormRow,
  Input,
  ProgressIndicator,
  Space,
} from "@dnb/eufemia";
import { ColumnDef } from "@tanstack/react-table";

import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { useCustomerData } from "../api/useCustomerData";
import { Customer } from "../types/customer";
import GenericTable from "./genericTable";

type Props = {
  onSelectedCustomerHandler?: (selected: Customer) => void;
};
export default function CustomerSearchDialog(props: Props) {
  const [customerName, setCustomerName] = useState<string>("");
  const [subscriptionName, setSubscriptionName] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useState<string>("");

  const { customers: customerData, isLoading } = useCustomerData(
    shouldFetch,
    queryParams
  );

  const onSelectedRowClick = (selectedItem: Customer, close: any) => {
    if (props.onSelectedCustomerHandler)
      props.onSelectedCustomerHandler(selectedItem);
    close();
  };

  const defaultColumns: ColumnDef<Customer>[] = [
    {
      accessorKey: "customerName",
      header: "Name",
    },
    {
      accessorKey: "id",
      header: "",
      enableSorting: false,
      cell: (info) => (
        <div className="float-right">
          <Dialog.Action>
            <Button
              title="Select customer"
              icon="check"
              size="small"
              right
              on_click={({ close }) =>
                onSelectedRowClick?.(info.row.original, close)
              }
            />
          </Dialog.Action>
        </div>
      ),
    },
  ];

  const onSearch = () => {
    setQueryParams(`?customerName_like=${customerName}`);
    setShouldFetch(true);
  };

  return (
    <>
      <Dialog
        closeTitle="Close"
        triggerAttributes={{
          text: "Search",
          icon: "loupe",
        }}
        title="searchForCustomer"
      >
        <FormRow direction="horizontal">
          <Input
            placeholder="Subscription Id"
            label_direction="vertical"
            bottom
            value={subscriptionName}
            right="small"
            on_change={({ value }) => setSubscriptionName(value)}
          />
          <Input
            placeholder="Customer Name"
            label_direction="vertical"
            value={customerName}
            bottom
            on_change={({ value }) => setCustomerName(value)}
            right="small"
          />
          <Space top="large x-small">
            <Button
              on_click={() => onSearch()}
              text="Search"
              icon="loupe"
              className="bg-[var(--color-sea-green)]"
            />
          </Space>
        </FormRow>
        {isLoading ? (
          <ProgressIndicator
            type="linear"
            label="Please Wait"
            show_label="true"
            label_direction="vertical"
          />
        ) : (
          customerData &&
          customerData.length > 0 && (
            <GenericTable
              columns={defaultColumns}
              data={(customerData as Customer[]) ?? []}
            ></GenericTable>
          )
        )}
      </Dialog>
    </>
  );
}
