import React from 'react';
import { Box, Text, Image, Badge, HStack } from '@chakra-ui/react';

const BestSellersSection = () => {
  const bestSellers = [
    {
      id: 2,
      name: 'Clasicas para tentarse',
      description: 'Crujientes croissants de mantequilla recién horneados.',
      price: 120.00,
      image: require("../images/cheesecake.jpg")
    },
    {
      id: 3,
      name: 'Elegantes para eventos',
      description: 'Donas esponjosas cubiertas con glaseado y decoradas con chispas de colores.',
      price: 160.00,
      image: require("../images/elegante.jpg")
    },
    {
      id: 4,
      name: 'Personalizadas',
      description: 'Pan artesanal con una mezcla de cereales y semillas.',
      price: 180.00,
      image: require("../images/Personalizadas.jpg")
    }
    // Agrega más productos aquí
  ];

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="semibold" mb={4} textAlign="center">
        Nuestros mejores productos
      </Text>
      <HStack spacing={6} alignItems="flex-start" justifyContent="center" flexWrap="wrap">
        {bestSellers.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            maxW="300px"
            textAlign="center"

          >
            <Image src={product.image} alt={product.name} h="300px" width="auto" />
            <Box p="4">
              <Text fontSize="lg" fontWeight="semibold" mb="2" fontFamily="Roboto">
                {product.name}
              </Text>
            </Box>
            {/* <Box mt="2">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                ${product.price}
              </Badge>
            </Box> */}
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default BestSellersSection;
