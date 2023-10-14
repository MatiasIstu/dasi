import React from 'react';
import { Box, Container, HStack, Spacer, VStack } from '@chakra-ui/react';
import BestSellersSection from '../components/bestsellerssection'; // Asegúrate de importar el componente BestSellersSection
import {
    Text,
} from '@chakra-ui/react'
import { AiFillCreditCard, AiOutlineQuestion} from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md'
function Inicio() {
    return (
        <Container maxW="container.lg">
            <Box marginTop={20}>
                <BestSellersSection />
            </Box>
            <HStack mt={20} mr={5}>
                <VStack>
                    <HStack>
                        <MdAttachMoney />
                        <Text fontSize="sm" fontWeight="semibold" fontFamily="oswald" letterSpacing="2px" textTransform="uppercase" >
                            DESCUENTO POR PAGO EN EFECTIVO
                        </Text>
                    </HStack>

                    <Text fontSize="sm" textAlign="center" letterSpacing="2px">
                        Todos los días 10% de descuento por pago en efectivo en el local.
                    </Text>
                </VStack>
                <VStack>
                    <HStack>
                        <AiFillCreditCard />
                        <Text fontSize="sm" fontWeight="semibold" fontFamily="oswald" letterSpacing="2px" textTransform="uppercase">
                            PAGÁ COMO QUIERAS
                        </Text>
                    </HStack>
                    <Text fontSize="sm" textAlign="center" letterSpacing="2px">
                        Aceptamos Mercadopago, Tarjetas de Crédito y Efectivo.
                    </Text>
                </VStack>
                <VStack>
                    <HStack>
                        <AiOutlineQuestion/>
                        <Text fontSize="sm" fontWeight="semibold" fontFamily="oswald" letterSpacing="2px" textTransform="uppercase">
                            CONSULTANOS EL STOCK
                        </Text>
                    </HStack>
                    <Text fontSize="sm" textAlign="center" letterSpacing="2px">
                        Tenemos productos disponibles en el local.
                    </Text>
                </VStack>
            </HStack>

        </Container>
    );
}

export default Inicio;
