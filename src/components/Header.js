import React, { useEffect, useRef } from "react";
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
    icon: faEnvelope,
    url: "mailto:hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const previousScrollY = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect( () => {
    const handleScroll =() =>{
      const currentY=window.scrollY;
       headerRef.current.style.transform=currentY>previousScrollY.current ? "translateY(-200px)": "translateY(0)";
       previousScrollY.current=currentY;
    };
    window.addEventListener("scroll",handleScroll);

    return () =>{
      window.removeEventListener("scroll",handleScroll);
    };

  },[]);

  return (
    <Box
      position="fixed"
      ref={headerRef}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 8, lg: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={{ base: 4, md: 6 }} flexWrap="wrap">
            {socials.map((social) =>
            (
              <a href={social.url} key={social.url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={social.icon} size="2x" /></a>
            )
            )}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={{ base: 4, md: 6 }} flexWrap="wrap">
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={handleClick("projects")}>Projects</a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
