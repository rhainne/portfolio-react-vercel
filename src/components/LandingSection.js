import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImageSrc from "../images/profile_pic.jpg";

const greeting = "Hello, I am Adri!";
const bio1 = "A fullstack developer with";
const bio2 = "a strong focus on backend";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    color="gray.200"
    bg="#0f172a" // the dark base color
    backgroundImage={`
      repeating-linear-gradient(
        45deg,
        rgba(192, 189, 0, 0.10) 0px,
        rgba(192, 189, 0, 0.10) 1px,
        transparent 1px,
        transparent 20px
      ),
      repeating-linear-gradient(
        -45deg,
        rgba(192, 189, 0, 0.10) 0px,
        rgba(192, 189, 0, 0.10) 1px,
        transparent 1px,
        transparent 20px
      )
    `}
    backgroundSize="cover"
  >
    <VStack>
      <Avatar name="adri" size="2xl" src={profileImageSrc} />
      <Heading size="sm" pb={10}>
        {greeting}
      </Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
