import React from 'react';
import { Box, Text, Image, Badge } from '@chakra-ui/react';
import tortadechocolate from '../images/torta_chocolate.jpg'
const ProductCard = ({ product }) => {
  console.log(product.image)
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      maxW="250px"
      maxH="250px"
      minH="250px"
      minW="250px"
    >
      <Image src={tortadechocolate} alt={product.name} />
      <Text mt="2" fontSize="lg" fontWeight="semibold">
        {product.name}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {product.description}
      </Text>
      <Box mt="4">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          ${product.price}
        </Badge>
      </Box>
    </Box>
  );
};

export default ProductCard;
