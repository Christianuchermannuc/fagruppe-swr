import { Breadcrumb, Pagination, ProgressIndicator, Table } from "@dnb/eufemia";
import GenericTable from "../../components/genericTable";
import { Product } from "../../types/product";
import { useHome } from "./useHome";

export default function HomePage() {
  const { defaultColumns, products, onPageChange, pageIndex, isLoading } =
    useHome();

  const data: Product[] = [{ id: "1", name: "test", price: "3233" }];
  return (
    <>
      {isLoading ? (
        <ProgressIndicator
          type="linear"
          label={"Laster data...."}
          show_label="true"
          label_direction="vertical"
        />
      ) : (
        products && (
          <Pagination
            page_count={10}
            current_page={pageIndex}
            on_change={({ page }) => onPageChange(page)}
          >
            <Table.ScrollView style={{ maxHeight: "180rem" }}>
              <GenericTable columns={defaultColumns} data={products} />
            </Table.ScrollView>
          </Pagination>
        )
      )}
    </>
  );
}
