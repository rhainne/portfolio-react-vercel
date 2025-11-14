import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      // minHeight="100vh"
      width="100%"
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      backgroundImage={boxProps.backgroundImage}
      backgroundSize={boxProps.backgroundSize}
      justifyContent="center"
      alignItems="center"
      maxWidth={boxProps.backgroundSize}
      {...boxProps}
    >
      <VStack width="100%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
