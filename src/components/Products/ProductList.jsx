import React, { useState, useEffect } from "react";

import {
  Heading,
  Box,
  Button,
  VStack,
  HStack,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel
} from "@chakra-ui/react";

import { useAlertContext } from "../../context/alertContext";
import useApiSubmit from "../../hooks/useApiSubmit";
import { MinimalCard } from "./SubComponents/MinimalCard";
import { ProductDetails } from "./SubComponents/ProductDetails";


function ProductList() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { isLoading, response, submit } = useApiSubmit({
    action: (api, data) => api.get(`/products`, { offset: offset, limit: limit }),
    successMessage: `Products loaded`,
    errorMessage: `Couldn't load products`,
  });

  const { onOpen } = useAlertContext();

  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const onSelect = (product) => { setSelected(product) };

  useEffect(() => {
    if (response && response.type === "success")
      setProducts(response.response);

  }, [response]);

  useEffect(() => {
    submit();
  }, [limit, offset]);


  return (
    <VStack w="100%" maxW="860px" mx="auto"
      px={{ base: 0, md: 4 }}
      py={{ base: 16, md: 20 }} spacing={4}
    >
      <Heading as="h1" id="delete-product-section" mb={6}>
        Product List
      </Heading>
      {/* <Button
        colorScheme="blue"
        width="full"
        isLoading={isLoading}
        onClick={() => submit()}
      >
        {!products.length ? "Load" : "Reload"}
      </Button> */}



      <HStack w="100%" justify="center" spacing={8}>
        <FormControl w="140px">
          <FormLabel fontSize="xs" color="gray.400" mb={1} ml={1}>Nº of products</FormLabel>
          <NumberInput
            value={limit}
            min={1}
            max={100}
            onChange={(_, val) => setLimit(val || 1)}
          >
            <NumberInputField
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              color="white"
              _focus={{ borderColor: "blue.400" }}
            />
          </NumberInput>
        </FormControl>

        <FormControl w="140px">
          <FormLabel fontSize="xs" color="gray.400" mb={1} ml={1}>Products to skip</FormLabel>
          <NumberInput
            value={offset}
            min={0}
            onChange={(_, val) => setOffset(val || 0)}
          >
            <NumberInputField
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              color="white"
              _focus={{ borderColor: "blue.400" }}
            />
          </NumberInput>
        </FormControl>
      </HStack>



      <Box
        p={2}
        rounded="md"
        w="100%"
        overflowY="auto"
        maxH={380}
      >
        {products.map((product) => (
          <MinimalCard
            key={product.id}
            product={product}
            onClick={() => onSelect(product)}
          />
        ))}
      </Box>
      {
        selected &&
        <ProductDetails
          product={selected}
        />
      }
    </VStack >
  );
}

export default ProductList;
