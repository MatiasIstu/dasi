import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="300px"
      textAlign="center"
    >
      <Image src={product.image} alt={product.name} h="300px" objectFit="fill" />

      <Box p="4">
        <Text fontSize="lg" fontWeight="semibold" mb="2" fontFamily="Roboto">
          {product.name}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
