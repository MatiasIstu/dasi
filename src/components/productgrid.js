import React from 'react';
import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import ProductCard from './productcard';

const ProductGrid = ({ products }) => {
  return (
    <Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={4} p={4}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default ProductGrid;
