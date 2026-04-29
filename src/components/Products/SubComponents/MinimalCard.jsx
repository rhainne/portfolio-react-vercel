import { Box, Flex, Text } from "@chakra-ui/react";

export function MinimalCard({ product, onClick }) {
  return (
    <Flex
      justify="space-between"
      gap={2}
      align="center"
      p={4}
      m={1}
      bg="whiteAlpha.50"
      border="0.5px solid"
      borderColor="whiteAlpha.200"
      borderRadius="lg"
      cursor="pointer"
      _hover={{ borderColor: "whiteAlpha.400" }}
      transition="border-color .15s"
      onClick={onClick}

    >
      <Text fontWeight="500" fontSize="sm">
        {product.title}
      </Text>
      <Text fontWeight="500" fontSize="sm" color="blue.300">
        ${product.price.toFixed(2)}
      </Text>
    </Flex>
  );
}