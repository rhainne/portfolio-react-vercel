import React from "react";
import { Button, Text, VStack, Heading, Link } from "@chakra-ui/react";
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
        <Text fontSize="sm" textAlign="center" pb={8}>
          In this section you can access CRUD forms connecting real {' '}
          <Link
            href="https://en.wikipedia.org/wiki/REST"
            isExternal
            color="blue.500"
            fontWeight="semibold"
          >REST</Link>, {' '}
          <Link
            href="https://graphql.org/"
            isExternal
            color="pink.400"
            fontWeight="semibold"
          >
            GraphQL
          </Link> and {' '}
          <Link
            href="https://grpc.io/"
            isExternal
            color="teal.400"
            fontWeight="semibold"
          >
            gRPC
          </Link> APIs I've developed before.
        </Text>
        <LinkedButton
          colorScheme="blue"
          path="/rest"
          text="REST"
        />
        <LinkedButton
          colorScheme="pink"
          path="/graphql"
          text="GraphQL"
        />
        <LinkedButton
          colorScheme="teal"
          path="/grpc"
          text="gRPC"
        />
      </VStack>
    </FullScreenSection>
  );
};

export default ProductsSection;
