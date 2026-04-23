import {
  Heading,
  HStack
} from "@chakra-ui/react";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";

function ProductsCRUD() {
  return (
    <HStack minW="480px" w="100%" alignItems={"flex-start"}>
      <CreateProduct />
      <DeleteProduct />
    </HStack>
  );
}

export default ProductsCRUD;
