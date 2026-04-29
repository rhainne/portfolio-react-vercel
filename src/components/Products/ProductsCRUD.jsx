import {
  Heading,
  Stack,
  space,
  VStack
} from "@chakra-ui/react";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import ProductList from "./ProductList";
import FullScreenSection from "../FullScreenSection";

function ProductsCRUD() {
  return (
    <>
      <ProductList />
      <Stack
        direction={{ base: "column", md: "row" }}
        w="100%" maxW="1024px" mx="auto"
        alignItems={"flex-start"}
        spacing={8}
      >
        <CreateProduct />
        {/* <VStack spacing={8} w="100%"> */}
        <DeleteProduct />
        {/* </VStack> */}
      </Stack>
    </>
  );
}

export default ProductsCRUD;
