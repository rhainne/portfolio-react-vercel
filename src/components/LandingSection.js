import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Adri!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const profileImageSrc = "https://media.licdn.com/dms/image/v2/D4D03AQEAtsv798dDLQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713815782783?e=1764806400&v=beta&t=4S2Afr98-EUI3T7XjrbhXhY38jzYkUjPdRLQkzcW6IY";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    color="gray.200"
  >
    <VStack>
      <Avatar name="adri" size="2xl" src={profileImageSrc} />
      <Heading size="sm" pb={10}>{greeting}</Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
