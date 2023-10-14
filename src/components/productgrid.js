import React from 'react';
import { Box } from '@chakra-ui/react';
import ProductCard from './productcard'; // Asegúrate de importar tu componente de tarjeta

const ProductGrid = ({ products }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={4} // Establece el espacio entre los productos
      p={4} // Agrega margen (padding) para separar los productos de la Navbar
    >
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          style={{ minWidth: '200px' }} // Establece un ancho mínimo
        />
      ))}
    </Box>
  );
};

export default ProductGrid;
