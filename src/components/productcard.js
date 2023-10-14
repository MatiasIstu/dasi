import React from 'react';
import { Box, Text, Image, Badge } from '@chakra-ui/react';
import tortadechocolate from '../images/torta_chocolate.jpg'
const ProductCard = ({ product }) => {
  console.log(product.image)
  return (
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
      <Image src={tortadechocolate} alt={product.name} />
      <Text ml='3' mt="2" fontSize="lg" fontWeight="semibold">
        {product.name}
      </Text>
      <Text ml='3' fontSize="sm" color="gray.500">
        {product.description}
      </Text>
      {/* <Box mt="auto"> 
        <Badge borderRadius="full" px="2" colorScheme="teal">
          ${product.price}
        </Badge>
      </Box> */}

    </Box>
  );
};

export default ProductCard;
