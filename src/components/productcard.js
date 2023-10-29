import React from 'react';
import { Box, Text, Image, Badge, VStack } from '@chakra-ui/react';
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
  maxH="350px"
  minH="350px"
  minW="250px"
  display="flex"
  flexDirection="column"
  justifyContent="space-between"
>

  <Image src={tortadechocolate} alt={product.name} h="50%" />

  <Box p="4" textAlign="center" flexGrow={1} display="flex" flexDirection="column" justifyContent="center">
    <Text fontSize="lg" fontWeight="semibold">
      {product.name}
    </Text>
    <Text fontSize="sm" color="gray.500">
      {product.description}
    </Text>
  </Box>
</Box>



  );
};

export default ProductCard;
