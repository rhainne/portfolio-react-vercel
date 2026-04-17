import { Heading } from "@chakra-ui/react";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";

function ProductsCRUD() {
  return (
    <>
      <CreateProduct />
      <DeleteProduct />
    </>
  );
}

export default ProductsCRUD;
