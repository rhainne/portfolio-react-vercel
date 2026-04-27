import {
  Heading,
  HStack,
  VStack
} from "@chakra-ui/react";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import ProductList from "./ProductList";

function ProductsCRUD() {
  return (
    <>
      <ProductList />
      <HStack
        minW="480px"
        w="100%"
        alignItems={"flex-start"}
        spacing={8}
      >
        <CreateProduct />
        <VStack spacing={8} w="100%">
          <DeleteProduct />
        </VStack>
      </HStack>
    </>
  );
}

export default ProductsCRUD;
