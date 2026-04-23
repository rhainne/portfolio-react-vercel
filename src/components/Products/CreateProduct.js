import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  Stack,
  VStack,
  Text,
  Kbd,
} from "@chakra-ui/react";

import { TagInput } from "../Forms/TagInput";
import { useAlertContext } from "../../context/alertContext";
import useApiSubmit from "../../hooks/useApiSubmit";


function CreateProduct() {
  const { isLoading, response, submit } = useApiSubmit({
    action: (api, data) => api.post("/products", data),
    successMessage: `Product created successfully!`,
    errorMessage: "Failed to create product"
  });
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      stock: "",
      sizes: [],
      tags: [],
      images: [],
      gender: "men",
    },
    onSubmit: (values) => submit(values),
    validationSchema: Yup.object({
      title: Yup.string().label("Name").required(),
      price: Yup.number().label("Price").required(),
      description: Yup.string().label("Description").required(),
      stock: Yup.number().label("Stock").required(),
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
      <Heading as="h1" id="create-product-section" mb={6}>
        Create Product
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
              isInvalid={formik.errors.title && formik.touched.title}
            >
              <FormLabel htmlFor="title">Name</FormLabel>
              <Input
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.price && formik.touched.price}
            >
              <FormLabel htmlFor="price">Price</FormLabel>
              <Input
                id="price"
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.description && formik.touched.description}
            >
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                id="description"
                name="description"
                height={120}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.stock && formik.touched.stock}
            >
              <FormLabel htmlFor="stock">Stock</FormLabel>
              <Input
                id="stock"
                name="stock"
                type="number"
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.stock}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.sizes && formik.touched.sizes}
            >
              <TagInput
                label="Sizes"
                value={formik.values.sizes}
                onChange={(val) => formik.setFieldValue("sizes", val)}
                error={formik.touched.sizes && formik.errors.sizes}
                placeholder="Add a size..."
              />
              <FormErrorMessage>{formik.errors.sizes}</FormErrorMessage>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Press <Kbd>Enter</Kbd> or <Kbd>,</Kbd> to add
              </Text>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.tags && formik.touched.tags}
            >
              <TagInput
                label="Tags"
                value={formik.values.tags}
                onChange={(val) => formik.setFieldValue("tags", val)}
                error={formik.touched.tags && formik.errors.tags}
                placeholder="Add a tag..."
              />
              <FormErrorMessage>{formik.errors.tags}</FormErrorMessage>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Press <Kbd>Enter</Kbd> or <Kbd>,</Kbd> to add
              </Text>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.images && formik.touched.images}
            >
              <TagInput
                label="Images"
                value={formik.values.images}
                onChange={(val) => formik.setFieldValue("images", val)}
                error={formik.touched.images && formik.errors.images}
                placeholder="Add an image URL..."
              />
              <FormErrorMessage>{formik.errors.images}</FormErrorMessage>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Press <Kbd>Enter</Kbd> or <Kbd>,</Kbd> to add
              </Text>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option
                  value="men" style={{ backgroundColor: "gray.100", color: "#2A4365" }}
                >
                  Men
                </option>
                <option
                  value="women" style={{ backgroundColor: "gray.100", color: "#2A4365" }}
                >
                  Women
                </option>
                <option
                  value="kids" style={{ backgroundColor: "gray.100", color: "#2A4365" }}
                >
                  Kids
                </option>
                <option
                  value="unisex" style={{ backgroundColor: "gray.100", color: "#2A4365" }}
                >
                  Unisex
                </option>
              </Select>
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              isLoading={isLoading}
            >
              Create
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack >
  );
}

export default CreateProduct;
