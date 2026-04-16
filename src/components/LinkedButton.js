import React from "react";
import { Link } from 'react-router-dom';
import { Button, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const LinkedButton = ({ path, text }) => {
  return (
    <Link to={path}>
      <Button colorScheme="teal" size="lg">
        {text}
      </Button>
    </Link>
  );
};

export default LinkedButton;
