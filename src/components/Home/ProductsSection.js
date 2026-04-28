import React from "react";
import { Button, Text, VStack, Heading } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import { useAlertContext } from "../../context/alertContext";
import LinkedButton from "../LinkedButton";

const ProductsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="gray.200"
      color="blue.800"
      isDarkBackground
      p={8}
      spacing={8}
      minHeight="50vh"
    >
      <VStack w="100%" maxW="860px" mx="auto"
        px={{ base: 0, md: 4 }}
        py={{ base: 16, md: 20 }} spacing={4}
      >
        <Heading as="h1" id="products-section">
          Products CRUD
        </Heading>
        <LinkedButton
          path="/products"
          text="Go to Products CRUD section"
        />
      </VStack>
    </FullScreenSection>
  );
};

export default ProductsSection;
