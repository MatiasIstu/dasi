import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import tortadechocolate from '../images/acercade.jpg';

function AcercaDe() {
  return (
    <Flex
      textAlign="center"
      padding="4"
      minH="40vh"
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      gap={{ base: '4', md: '300' }}
    >
      <Box>
        <Heading as="h1" size="xl" mb="4">
          Sobre Mí
        </Heading>
        <Text fontSize="lg" lineHeight="1.6" maxW={{ base: '100%', md: '800px' }}>
          Soy Maria Belen Bautista, cocinera y pastelera capacitada en el Instituto Argentino de Gastronomía (IAG). En el 2020, durante la pandemia, cree este emprendimiento con toda la emoción de transmitirles mi pasión por la cocina y brindarles mi mayor esfuerzo para que disfruten al máximo en sus días especiales
        </Text>
      </Box>
      <Box mt={{ base: '4', md: '0' }}>
        <Image src={tortadechocolate} h="350px" w="100%" objectFit="fill" borderRadius="40" />
      </Box>
    </Flex>
  );
}

export default AcercaDe;
