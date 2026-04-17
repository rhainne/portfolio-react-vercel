import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";


const imageUrl1 = "https://picsum.photos/4193/2785?random=1";
const imageUrl2 = "https://picsum.photos/4193/2785?random=2";
const imageUrl3 = "https://picsum.photos/4193/2785?random=3";
const imageUrl4 = "https://picsum.photos/4193/2785?random=4";
const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageUrl: imageUrl1,
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageUrl: imageUrl2,
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageUrl: imageUrl3,
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageUrl: imageUrl4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="gray.200"
      color="blue.800"
      isDarkBackground
      p={8}
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Text fontSize="sm" textAlign="center">
        Dummy examples to display a responsive grid layout and card components loaded from remotely randomly retrieved images. The projects are not real.
      </Text>
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "1fr", // < 550px → 1 column
          md: "repeat(2, minmax(0, 1fr))", // ≥ 550px → 2 flexible equal columns
        }}
        gridGap={8}
        maxW="1280px"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageUrl}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
