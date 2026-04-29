import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="black">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          height={16}
        >
          <p>Adri • © 2025</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
