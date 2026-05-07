import React from "react";
import { Link } from 'react-router-dom';
import { Button, propNames, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const LinkedButton = ({ path, text, ...props }) => {
  return (
    <Link to={path}>
      <Button size="lg" {...props}>
        {text}
      </Button>
    </Link>
  );
};

export default LinkedButton;
