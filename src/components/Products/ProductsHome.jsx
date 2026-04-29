import React from "react";
import { Button, Heading, Text, Link, VStack } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import { useAuth } from "../auth/AuthContext";
import { LoginPage } from "./LoginPage";
import ProductsCRUD from "./ProductsCRUD";

const ProductsHome = () => {
  const { isAuthenticated, logout } = useAuth();
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
      <VStack w="100%" maxW="860px" mx="auto"
        px={{ base: 0, md: 4 }}
        py={{ base: 16, md: 20 }} spacing={4}
      >
        {!isAuthenticated && (
          <Text textAlign="center" fontSize="sm">
            Login to access the products CRUD. The underlying Rest API is made with{' '}
            <Link
              href="https://nestjs.com/"
              isExternal
              color="red.400"
              fontWeight="semibold"
            >
              NestJS
            </Link>{' '}
            and hosted on {' '}
            <Link
              href="https://render.com/"
              isExternal
              color="green.400"
              fontWeight="semibold"
            >
              Render.
            </Link>{' '}
            The first call to the API will wake it up if its asleep, so it might take a few seconds to log in.
          </Text>
        )}
        <Heading as="h2" size={"lg"} mb={8} id="product-crud-section">
          {!isAuthenticated ?? "Log in to access the products CRUD"}
        </Heading>
        {
          !isAuthenticated
            ? <LoginPage />
            :
            <>
              <ProductsCRUD />
              <Button
                position="fixed"
                bottom="3"
                right="3"
                rounded="md"
                boxShadow="md"
                size="md"
                colorScheme="blue"
                aria-label="logout"
                onClick={logout}
              >
                Logout
              </Button>
            </>
        }
      </VStack>
    </FullScreenSection >
  );
};

export default ProductsHome;
