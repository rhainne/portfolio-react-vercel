import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: adrigargonzalez@gmail.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com/rhainne",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/adriangarciagonzalez1337/",
  },
  {
    id: 4,
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/4163365/rain",
  },
];


const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const prevLocationRef = useRef(location);
  const isHome = location.pathname === '/';

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${show ? "0" : "-100%"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      zIndex={999}
      borderBottom="1px solid"
      borderBottomColor="gray.600"
      bg="black"
    >
      <Box color="white" margin="0 auto">
        <HStack
          pr={16}
          pl={[4, 8, 8]}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={[3, 4, 4]}>
              {socials.map((item) => (
                <a key={`icon-link-${item.id}`} href={item.url} target="_blank">
                  <FontAwesomeIcon icon={item.icon} size={"lg"} color="gainsboro" />
                </a>
              ))}
            </HStack>
          </nav>
          {isHome && (
            <nav>
              <HStack spacing={[2, 5, 5]} fontSize={[12, 16, 16]}>
                <a href="" onClick={handleClick("projects")}>Projects</a>
                <a href="" onClick={handleClick("contactme")}>Contact me</a>
                <a href="" onClick={handleClick("products")}>Products</a>
              </HStack>
            </nav>
          )}
          {!isHome && (
            <nav>
              <HStack spacing={[2, 5, 5]} fontSize={[12, 16, 16]}>
                <Link to="/">Home</Link>
              </HStack>
            </nav>
          )}
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
