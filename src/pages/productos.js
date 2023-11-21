import React from 'react';
import ProductGrid from '../components/productgrid'; // Asegúrate de importar el componente ProductGrid
const products = [
    // {
    //   id: 1,
    //   name: 'Torta de Chocolate',
    //   description: 'Deliciosa torta de chocolate con relleno de crema y cobertura de chocolate.',
    //   price: 350.00,
    //   image: require("../images/torta_chocolate.jpg")
    // },
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
    },
    {
      id: 5,
      name: 'Navidad',
      description: 'Eclairs rellenos de crema de vainilla y cubiertos con chocolate.',
      price: 250.00,
      image: require("../images/Propuestanavidad.jpg")
    },
    {
      id: 6,
      name:  'Boxes Saladas',
      description: 'Galletas de avena caseras con trozos de chocolate.',
      price: 140.00,
      image:  require("../images/BoxesSaladas.jpg")
    },
    {
      id: 7,
      name: 'Propuestas para pascua',
      description: 'Baguette recién horneado con queso derretido y hierbas aromáticas.',
      price: 190.00,
      image: require("../images/Pascua.jpg")
    },
    {
      id: 8,
      name: 'Año nuevo',
      description: 'Tarta clásica de manzana con una capa de crujiente masa y manzanas caramelizadas.',
      price: 270.00,
      image: require("../images/año.jpg")
    },
    {
      id: 9,
      name: 'Brownie con crema',
      description: 'Muffins tiernos con arándanos frescos y azúcar glas.',
      price: 130.00,
      image: require("../images/marquise.jpg")
    }
    // {
    //   id: 10,
    //   name: 'Panecillos de Canela',
    //   description: 'Panecillos esponjosos con canela y glaseado de crema de queso.',
    //   price: 180.00,
    //   image: 'https://example.com/panecillos.jpg'
    // },
    // {
    //   id: 11,
    //   name: 'Brownies de Nuez',
    //   description: 'Brownies con nueces tostadas y una capa de chocolate fundido.',
    //   price: 200.00,
    //   image: 'https://example.com/brownies.jpg'
    // },
    // {
    //   id: 12,
    //   name: 'Palmeritas de Chocolate',
    //   description: 'Palmeritas crujientes cubiertas de chocolate y azúcar glas.',
    //   price: 160.00,
    //   image: 'https://example.com/palmeritas.jpg'
    // },
    // {
    //   id: 13,
    //   name: 'Pan de Plátano',
    //   description: 'Pan de plátano recién horneado con trozos de plátano maduro.',
    //   price: 190.00,
    //   image: 'https://example.com/pan_platano.jpg'
    // },
    // {
    //   id: 14,
    //   name: 'Tarta de Frambuesa',
    //   description: 'Tarta de frambuesa con una base de galleta y crema de frambuesa.',
    //   price: 250.00,
    //   image: 'https://example.com/tarta_frambuesa.jpg'
    // },
    // {
    //   id: 15,
    //   name: 'Croissant de Almendras',
    //   description: 'Croissants rellenos de almendras y cubiertos con almendras laminadas.',
    //   price: 170.00,
    //   image: 'https://example.com/croissant_almendras.jpg'
    // },
    // {
    //   id: 16,
    //   name: 'Cookies con Chips de Chocolate',
    //   description: 'Cookies recién horneadas con generosas chispas de chocolate.',
    //   price: 140.00,
    //   image: 'https://example.com/cookies.jpg'
    // },
    // {
    //   id: 17,
    //   name: 'Tarta de Limón',
    //   description: 'Tarta de limón con relleno de crema de limón y cobertura de merengue.',
    //   price: 280.00,
    //   image: 'https://example.com/tarta_limon.jpg'
    // },
    // {
    //   id: 18,
    //   name: 'Pan Multigrano',
    //   description: 'Pan multigrano con semillas de lino, chía y girasol.',
    //   price: 200.00,
    //   image: 'https://example.com/pan_multigrano.jpg'
    // },
    // {
    //   id: 19,
    //   name: 'Profiteroles',
    //   description: 'Profiteroles rellenos de crema y cubiertos de chocolate caliente.',
    //   price: 260.00,
    //   image: 'https://example.com/profiteroles.jpg'
    // }
  ];
  
const Productos = () => {
    return (
      <div>
            <ProductGrid products={products} />
      </div>
    );
  };

export default Productos;
