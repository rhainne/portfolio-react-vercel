import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Heading,
  Box,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Kbd,
} from "@chakra-ui/react";

import { useAlertContext } from "../../context/alertContext";
import useApiSubmit from "../../hooks/useApiSubmit";


function DeleteProduct() {
  const { isLoading, response, submit } = useApiSubmit({
    action: (api, data) => api.delete(`/products/${data.id}`),
    successMessage: `Product deleted successfully!`,
    errorMessage: "Failed to delete product"
  });
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      id: "",
    },
    onSubmit: (values) => submit(values),
    validationSchema: Yup.object({
      id: Yup.string().label("Product id").required(),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);

      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  return (
    <VStack minW="480px" w="100%" maxW="1024px">
      <Heading as="h1" id="delete-product-section" mb={6}>
        Delete Product
      </Heading>
      <Box
        p={2}
        rounded="md"
        w="100%"
        minW={{ base: "280px", sm: "340px", md: "400px" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl
              isInvalid={formik.errors.id && formik.touched.id}
            >
              <FormLabel htmlFor="id">Product id</FormLabel>
              <Input
                id="id"
                name="id"
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.id}</FormErrorMessage>
              <Text fontSize="xs" color="gray.400" mt={1}>
                Enter the product id to delete.
              </Text>
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              isLoading={isLoading}
            >
              Delete
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack >
  );
}

export default DeleteProduct;
