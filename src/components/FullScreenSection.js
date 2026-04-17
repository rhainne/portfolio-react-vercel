import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      width="100%"
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      backgroundImage={boxProps.backgroundImage}
      backgroundSize={boxProps.backgroundSize}
      justifyContent="center"
      alignItems="center"
      fontFamily="inherit"
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
