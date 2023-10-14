import React from 'react';
import { Box, Text, Image, Badge, HStack } from '@chakra-ui/react';

const BestSellersSection = () => {
  const bestSellers = [
    {
      id: 1,
      name: 'Torta de Chocolate',
      description: 'Deliciosa torta de chocolate con relleno de crema y cobertura de chocolate.',
      price: 350.00,
      image: require("../images/torta_chocolate.jpg")
    },

    {
        id: 2,
        name: 'Croissant de Mantequilla',
        description: 'Crujientes croissants de mantequilla recién horneados.',
        price: 120.00,
        image: require("../images/torta_chocolate.jpg")
      },
      {
        id: 3,
        name: 'Croissant de Mantequilla',
        description: 'Crujientes croissants de mantequilla recién horneados.',
        price: 120.00,
        image: require("../images/torta_chocolate.jpg")
      },
    // Agrega más productos aquí
  ];

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="semibold" mb={4}  textAlign="center">
        Los más vendidos
      </Text>
      <HStack spacing={6} alignItems="flex-start" justifyContent="center" flexWrap="wrap">
        {bestSellers.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            maxW="250px"
            maxH="280px"
            minH="280px"
            minW="250px"
          >
            <Image src={product.image} alt={product.name} maxH="200px" />
            <Text ml="2" mt="2" fontSize="lg" fontWeight="semibold">
              {product.name}
            </Text>
            <Text ml="2" mb="2" fontSize="sm" color="gray.500">
              {product.description}
            </Text>
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
