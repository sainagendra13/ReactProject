import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    
    <VStack
    backgroundColor="white"
    color="black"
    borderRadius="md"
    overflow="hidden"
    alignItems="stretch"
    spacing={0}
    >
    <Image src={imageSrc} alt={title} width="100%" objectFit="cover" />
    <VStack
    alignItems="flex-start"
    spacing={4}
    p={6}
    >
    <Heading as="h3" size="md">
       {title}
    </Heading>
    <Text>
      {description}
    </Text>
    <HStack spacing={2}>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" style={{cursor : "pointer"}}/>
      </HStack>

    </VStack>
    </VStack>
    

  
  );
};

export default Card;
