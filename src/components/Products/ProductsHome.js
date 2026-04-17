import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import { useAuth } from "../auth/AuthContext";
import { LoginPage } from "./LoginPage";
import ProductsCRUD from "./ProductsCRUD";

const ProductsHome = () => {
  const { isAuthenticated } = useAuth();
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
        <Heading as="h2" size={"lg"} mb={8} id="product-crud-section">
          {!isAuthenticated
            ? "Log in to access the products CRUD"
            : "You are authenticated. Page under construction"
          }
        </Heading>
        {
          !isAuthenticated
            ? <LoginPage />
            : <ProductsCRUD />
        }
      </VStack>
    </FullScreenSection>
  );
};

export default ProductsHome;
