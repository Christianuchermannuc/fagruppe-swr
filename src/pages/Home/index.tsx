import { Breadcrumb } from "@dnb/eufemia";
import GenericTable from "../../components/genericTable";
import { Product } from "../../types/product";
import { useHome } from "./useHome";

export default function HomePage() {
  const { defaultColumns, products } = useHome();

  const data: Product[] = [{ id: "1", name: "test", price: "3233" }];
  return (
    <>
      <Breadcrumb spacing>
        <Breadcrumb.Item
          onClick={() => {
            console.log("go home!");
          }}
          variant="home"
        />
        <Breadcrumb.Item
          text="Page item"
          onClick={() => {
            console.log("go to page 1");
          }}
        />
        <Breadcrumb.Item
          text="Page item"
          onClick={() => {
            console.log("go to page 2");
          }}
          variant="current"
        />
      </Breadcrumb>
      {products && <GenericTable columns={defaultColumns} data={products} />}
    </>
  );
}
