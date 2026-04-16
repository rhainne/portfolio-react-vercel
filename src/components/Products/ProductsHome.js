import React from "react";
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
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import { useAlertContext } from "../../context/alertContext";

const ProductsHome = () => {
  return (
    <FullScreenSection
      isDarkBackground
      bg="#0f172a"
      color="gray.200"
      // py={16}
      spacing={8}
      w="100%"
      backgroundImage={`
      repeating-linear-gradient(
        45deg,
        rgba(192, 189, 0, 0.10) 0px,
        rgba(192, 189, 0, 0.10) 1px,
        transparent 1px,
        transparent 20px
      ),
      repeating-linear-gradient(
        -45deg,
        rgba(192, 189, 0, 0.10) 0px,
        rgba(192, 189, 0, 0.10) 1px,
        transparent 1px,
        transparent 20px
      )
    `}
    >
      <VStack minW="480px" w="100%" maxW="1024px" p={32}>
        <Heading as="h1" id="product-crud-section">
          Section under construction
        </Heading>
        {/* <Button colorScheme="teal" size="lg" onClick={() => alert("Button clicked!")}>
          Products
        </Button> */}
      </VStack>
    </FullScreenSection>
  );
};

export default ProductsHome;
