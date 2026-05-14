import { Box, Badge, Text, SimpleGrid, Divider, Code, HStack, Icon, Button, Center } from "@chakra-ui/react";

function GraphQLExplainer(children) {
  return (
    <Box
      w="100%"
      bg="pink.50"
      border="0.5px solid"
      borderColor="pink.600"
      borderRadius="lg"
      p={6}
      mt={2}
    >
      <Badge colorScheme="pink" variant={"outline"} borderRadius="full" px={3} py={1} mb={4}>
        GraphQL API
      </Badge>

      <Text fontWeight="500" fontSize="md" mb={2}>
        Ask for exactly what you need
      </Text>
      <Text fontSize="sm" color="gray.600" lineHeight="1.7" mb={5}>
        Unlike REST — where the server decides what data you get — GraphQL lets
        the client specify the exact fields it needs. One endpoint, any query,
        no over-fetching.
      </Text>

      <SimpleGrid columns={2} spacing={3} mb={5}>
        {[
          { label: "Single endpoint", value: "/graphql" },
          { label: "Operations", value: "Queries · Mutations · Subscriptions" },
          { label: "Auth", value: "JWT Bearer token" },
          { label: "Real-time", value: "WebSocket subscriptions" },
        ].map(({ label, value }) => (
          <Box
            key={label}
            bg="pinkAlpha.500"
            border="0.5px solid"
            borderColor="pink.600"
            borderRadius="md"
            p={3}
          >
            <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="wider" mb={1}>
              {label}
            </Text>
            <Text fontSize="sm">
              {value}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Divider borderColor="pink.600" mb={4} />

      <Text fontSize="10px" color="gray.500" textTransform="uppercase" letterSpacing="wider" mb={2}>
        Example query
      </Text>
      <Box
        as="pre"
        bg="pinkAlpha.100"
        border="0.5px solid"
        borderColor="pink.600"
        borderRadius="md"
        p={3}
        fontSize="xs"
        fontFamily="mono"
        color="gray.700"
        lineHeight="1.7"
      >
        <Text as="span" color="pink.300">query</Text>
        {` {\n  servers {\n    id\n    status\n    uptime\n  }\n}`}
      </Box>

      <Box textAlign="center">
        <Button
          as="a"
          mt={6}
          p={3}
          colorScheme="pink"
          href="https://graphql-api-j5jl.onrender.com/altair/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try it live in Altair playground
        </Button>
      </Box>
    </Box>
  );
}

export default GraphQLExplainer;