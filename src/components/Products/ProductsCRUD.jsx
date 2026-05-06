import { useState } from "react";
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
  const [selectedId, setSelectedId] = useState("");  // ← shared state

  return (
    <>
      <ProductList onProductSelect={(id) => setSelectedId(id)} />
      <Stack
        direction={{ base: "column", md: "row" }}
        w="100%" maxW="1024px" mx="auto"
        alignItems={"flex-start"}
        spacing={8}
      >
        <CreateProduct />
        {/* <VStack spacing={8} w="100%"> */}
        <DeleteProduct selectedId={selectedId} />
        {/* </VStack> */}
      </Stack>
    </>
  );
}

export default ProductsCRUD;
