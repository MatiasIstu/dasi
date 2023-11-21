import React from 'react';
import { Box, Heading, VStack, Input, Textarea, Button, Flex, Icon, Grid } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

function Contacto() {
  return (
    <Box textAlign="center" p="8">
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="8" align="center">
        <Box>
          <Heading as="h2" mb="4">
            Dejanos tu mensaje
          </Heading>
          <form>
            <VStack spacing="4" align="stretch" maxW="400px" m="auto">
              <Input type="text" placeholder="Nombre" />
              <Input type="email" placeholder="Correo Electrónico" />
              <Textarea placeholder="Mensaje" resize="vertical" h="500px" />
              <Button colorScheme="teal" type="submit" w="100%">
                Enviar Mensaje
              </Button>
            </VStack>
          </form>
        </Box>

        <Box>
          <Flex direction="row" align="center" justifyContent="space-around">
            <Heading as="h2" mb="4">
              O comunicate con nosotros por WhatsApp
            </Heading>
            <Button
              size="lg"
              width="88px"
              borderRadius="30"
              colorScheme="whatsapp"
              as="a"
              href="https://wa.me/1234567890"  // Reemplaza con tu enlace de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size="50" style={{ color: 'white' }} />
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contacto;
