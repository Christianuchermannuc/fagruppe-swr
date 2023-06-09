import { InfoCard, Space } from "@dnb/eufemia";
import CustomerSearchForm from "../../components/customerSearchForm";
import { useCustomerPage } from "./useCustomerPage";

function CustomerPage() {
  const { onSelectedCustomer, selectedCustomer } = useCustomerPage();
  return (
    <div>
      <h1>Customer page</h1>
      <CustomerSearchForm
        onSelectedCustomerHandler={onSelectedCustomer}
        label1Value={"customerId"}
        label2Value={"customerName"}
      />
      <Space top="large x-small"></Space>
      {selectedCustomer && (
        <>
          <InfoCard text={selectedCustomer.customerName} title="Valgt kunde" />
        </>
      )}
    </div>
  );
}

export default CustomerPage;
