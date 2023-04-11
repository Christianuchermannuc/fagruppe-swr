import { Button } from "@dnb/eufemia";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import {
  addProduct,
  addProductOptions,
  useChargeItems,
} from "../../api/useProductData";
import { Product } from "../../types/product";

export const useHome = () => {
  const [queryParamsString, setQueryParamsString] =
    useState<string>("?_page=1&_limit=10");
  const onDeleteRowClick = (deleteItem: Product) => {};
  const [pageIndex, setPageIndex] = useState<string>("1");
  const { products, isLoading, mutate } = useChargeItems(
    true,
    queryParamsString
  );

  const onAddRowClick = async () => {
    const newId = (Math.floor(Math.random() * 100000) + 1).toString();
    const newProduct = {
      id: newId,
      name: "Product " + newId,
      price: "22",
    };

    const localChangeNewProduct = { ...newProduct, name: "En test" };
    addProduct(newProduct);
    const updateProducts = [...products, localChangeNewProduct];
    mutate(updateProducts);
    // await mutate(
    //   addProduct(newProduct),
    //   addProductOptions(localChangeNewProduct)
    // );
  };

  const defaultColumns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "id",
      header: "",
      enableSorting: false,
      cell: (info) => (
        <>
          <Button
            icon="close"
            on_click={() => onDeleteRowClick?.(info.row.original)}
          />
        </>
      ),
    },
  ];

  const onPageChange = (pageNumber: string) => {
    setPageIndex(pageNumber);
    const query = `_page=${pageNumber}&_limit=10`;

    setQueryParamsString(`?${query}`);
  };

  return {
    defaultColumns,
    products,
    onPageChange,
    pageIndex,
    isLoading,
    onAddRowClick,
  };
};
