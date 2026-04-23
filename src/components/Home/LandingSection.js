import { Avatar, Center, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import profileImageSrc from "../../images/profile_pic.jpg";

const greeting = "Hello, I'm Adri!";
const bio1 = "A backend-focused fullstack developer with a background in .NET, JavaScript, and some other languages \
and a growing focus on modern web technologies. I enjoy designing robust systems, improving code quality, \
and continuously learning better ways to build software.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    color="gray.200"
    bg="#0f172a"
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
      <Heading
        size={"sm"}
        textAlign={"center"}
        maxW={"700px"}
        fontWeight={400}
      >
        {bio1}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
