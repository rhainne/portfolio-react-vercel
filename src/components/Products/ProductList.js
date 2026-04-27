import React, { useState, useEffect } from "react";

import {
  Heading,
  Box,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { useAlertContext } from "../../context/alertContext";
import useApiSubmit from "../../hooks/useApiSubmit";
import { MinimalCard } from "./SubComponents/MinimalCard";
import { ProductDetails } from "./SubComponents/ProductDetails";


function ProductList() {
  const { isLoading, response, submit } = useApiSubmit({
    action: (api, data) => api.get(`/products`, { offset: 0, limit: 10 }),
    successMessage: `Products loaded`,
    errorMessage: `Couldn't load products`,
  });
  const { onOpen } = useAlertContext();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const onSelect = (product) => {
    setSelected(product);
  };

  useEffect(() => {
    if (response && response.type === "success")
      setProducts(response.response);

  }, [response]);


  return (
    <VStack minW="480px" w="100%" maxW="1024px">
      <Heading as="h1" id="delete-product-section" mb={6}>
        Product List
      </Heading>
      <Box
        p={2}
        rounded="md"
        w="100%"
        minW={{ base: "280px", sm: "340px", md: "400px" }}
        overflowY="auto"
        maxH={500}
      >
        {!products.length ?
          <>
            <Button
              colorScheme="blue"
              width="full"
              isLoading={isLoading}
              onClick={() => submit()}
            >
              Get the list of products
            </Button>
          </>
          :
          products.map((product) => (
            <MinimalCard
              key={product.id}
              product={product}
              onClick={() => onSelect(product)}
            />
          ))
        }
      </Box>
      {selected &&
        <ProductDetails
          product={selected}
        />
      }
    </VStack >
  );
}

export default ProductList;
