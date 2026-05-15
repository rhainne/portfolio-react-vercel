import { Box, Badge, Text, SimpleGrid, Divider, Button } from "@chakra-ui/react";

function RestExplainer() {
  return (
    <Box
      w="100%"
      bg="blue.50"
      border="0.5px solid"
      borderColor="blue.600"
      borderRadius="lg"
      p={6}
      mt={2}
    >
      <Badge colorScheme="blue" variant={"outline"} borderRadius="full" px={3} py={1} mb={4}>
        REST API
      </Badge>

      <Text fontWeight="500" fontSize="md" mb={2}>
        Resources over HTTP
      </Text>
      <Text fontSize="sm" color="gray.600" lineHeight="1.7" mb={5}>
        REST organises data as resources, each with its own URL. You interact
        with them using standard HTTP methods — no special query language needed,
        just predictable endpoints and status codes.
      </Text>

      <SimpleGrid columns={2} spacing={3} mb={5}>
        {[
          { label: "Protocol", value: "HTTP / HTTPS" },
          { label: "Operations", value: "GET · POST · PUT · DELETE" },
          { label: "Auth", value: "JWT Bearer token" },
          { label: "Format", value: "JSON request & response" },
        ].map(({ label, value }) => (
          <Box
            key={label}
            bg="whiteAlpha.100"
            border="0.5px solid"
            borderColor="blue.600"
            borderRadius="md"
            p={3}
          >
            <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="wider" mb={1}>
              {label}
            </Text>
            <Text fontSize="sm">{value}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Divider borderColor="blue.600" mb={4} />

      <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="wider" mb={2}>
        Example request
      </Text>
      <Box
        as="pre"
        bg="whiteAlpha.100"
        border="0.5px solid"
        borderColor="blue.600"
        borderRadius="md"
        p={3}
        fontSize="xs"
        fontFamily="mono"
        color="gray.700"
        lineHeight="1.7"
        overflow="hidden"
        // whiteSpace="pre"
        textOverflow="ellipsis"
      >
        <Text as="span" color="blue.300">GET</Text>
        {` /api/products?limit=10&offset=0\n`}
        <Text as="span" color="blue.300">Authorization:</Text>
        {` Bearer <token>`}
      </Box>

      <Box>
        <Button
          as="a"
          href="/rest"
          mt={6}
          p={3}
          w={"100%"}
          colorScheme="blue"
        >
          <Text isTruncated>
            Try the REST playground
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

export default RestExplainer;