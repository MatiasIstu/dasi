import React from 'react';
import { Box, Container, HStack, Stack, Text } from '@chakra-ui/react';
import BestSellersSection from '../components/bestsellerssection';
import { AiFillCreditCard, AiOutlineQuestion } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';

function Inicio() {
    return (
        <Container maxW="container.lg" marginTop={20}>
            <BestSellersSection />
            <Stack direction={{ base: 'column', md: 'row' }} spacing={5} mt={20}>
                <Box>
                    <Stack align="center">
                        <HStack>
                            <MdAttachMoney />
                            <Text fontSize="sm" width={{ base: 'auto', md: '350px' }} fontWeight="semibold" fontFamily="oswald" letterSpacing="2px" textTransform="uppercase">
                                DESCUENTO POR PAGO EN EFECTIVO
                            </Text>
                        </HStack>
                        <Text fontSize="sm" textAlign="center" letterSpacing="2px">
                            Todos los días 10% de descuento por pago en efectivo
                        </Text>
                    </Stack>
                </Box>

                <Box textAlign="center">
                    <Stack align="center">
                        <HStack>
                            <AiFillCreditCard />
                            <Text fontSize="sm" width={{ base: 'auto', md: '250px' }} fontWeight="semibold" fontFamily="oswald" letterSpacing="2px" textTransform="uppercase">
                                PAGÁ COMO QUIERAS
                            </Text>
                        </HStack>
                        <Text fontSize="sm" textAlign="center" letterSpacing="2px">
                            Aceptamos Mercadopago, Tarjetas de Crédito y Efectivo.
                        </Text>
                    </Stack>
                </Box>

                <Box>
                    <Stack align="center">
                        <HStack>
                            <AiOutlineQuestion />
                            <Text fontSize="sm" width={{ base: 'auto', md: '250px' }} fontWeight="semibold" fontFamily="oswald" letterSpacing="2px" textTransform="uppercase">
                                CONSULTANOS EL STOCK
                            </Text>
                        </HStack>
                        <Text fontSize="sm" textAlign="center" letterSpacing="2px">
                            Tenemos un límite en los pedidos. Consulta por el stock disponible.
                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}

export default Inicio;
