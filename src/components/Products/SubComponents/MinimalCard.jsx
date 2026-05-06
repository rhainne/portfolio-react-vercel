import { Box, Flex, Text } from "@chakra-ui/react";

export function MinimalCard({ product, onClick, isSelected }) {
  return (
    <Flex
      justify="space-between"
      gap={2}
      align="center"
      p={4}
      m={1}
      bg={isSelected ? "whiteAlpha.200" : "whiteAlpha.50"}
      border="0.5px solid"
      borderColor={isSelected ? "blue.400" : "whiteAlpha.200"}
      boxShadow={isSelected ? "0 0 0 1px var(--chakra-colors-blue-400)" : "none"}
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