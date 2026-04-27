import {
  Box, Divider, Flex, HStack, Tag, Text, Wrap, WrapItem,
} from "@chakra-ui/react";

export function ProductDetails({ product }) {
  return (
    <Box
      mt={5}
      p={5}
      bg="whiteAlpha.50"
      border="0.5px solid"
      borderColor="whiteAlpha.200"
      borderRadius="lg"
    >
      <Flex justify="space-between" align="flex-start" mb={3}>
        <Box>
          <Text fontWeight="500" fontSize="lg">{product.title}</Text>
          <Text fontSize="xs" color="gray.500">{product.slug}</Text>
        </Box>
        <Text fontWeight="500" fontSize="2xl" color="blue.300">
          ${product.price.toFixed(2)}
        </Text>
      </Flex>

      <Text fontSize="sm" color="gray.400" lineHeight="1.6" mb={4}>
        {product.description}
      </Text>

      <Divider borderColor="whiteAlpha.200" mb={4} />

      <Row label="Stock">
        <Tag colorScheme="green" borderRadius="full" size="sm">
          ✓ {product.stock} in stock
        </Tag>
      </Row>

      <Row label="Gender">
        <Tag borderRadius="full" size="sm">{product.gender}</Tag>
      </Row>

      <Row label="Sizes">
        <Wrap spacing={2}>
          {product.sizes.map((s) => (
            <WrapItem key={s}>
              <Tag borderRadius="full" size="sm">{s}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Row>

      <Row label="Tags">
        <Wrap spacing={2}>
          {product.tags.map((t) => (
            <WrapItem key={t}>
              <Tag colorScheme="blue" borderRadius="full" size="sm">{t}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Row>

      <Divider borderColor="whiteAlpha.200" my={4} />

      <Row label="Images" align="flex-start">
        <Wrap spacing={2}>
          {product.images.map((img) => (
            <WrapItem key={img}>
              <Tag size="sm" fontFamily="mono" fontSize="xs" colorScheme="gray">
                {img}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Row>

      <Row label="ID">
        <Text fontSize="xs" fontFamily="mono" color="gray.500">
          {product.id}
        </Text>
      </Row>
    </Box>
  );
}

// small layout helper — keeps rows DRY
function Row({ label, children, align = "center" }) {
  return (
    <Flex align={align} gap={4} mb={3} fontSize="sm">
      <Text color="gray.500" minW="72px">{label}</Text>
      {children}
    </Flex>
  );
}