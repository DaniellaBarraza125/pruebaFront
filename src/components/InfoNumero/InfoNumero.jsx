import { Box, Center, Heading } from '@chakra-ui/react'
import { Flex, Select } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'

const InfoNumero = () => {
  return (

 <Center>
    <Box border='gray 1px solid'w={'55vw'} p={1}borderRadius={5}>
        <Center >
            <div w="40vw" gap='5'> 
                <Box p='5px'>E-ISSN:</Box>
                <Heading>Número Actual</Heading>
                <Flex gap="small" >
                <Box p={2}>Vol.</Box> <Box p={2}>Num.</Box><Box p={2}>| Fecha</Box>
                </Flex>
            </div>
        </Center>
        <Center  flexDirection='column'>
            <div p={2}>
                <Select options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]} placeholder='hola'  style={{ width: 310 }} ></Select>
            </div>
            
            <Box display={'flex'} gap={5} p={2}>
                <p>Número anterior</p>
                <p>Histórico</p>
                <p>Siguiente Número </p>
            
            </Box>
        </Center>
</Box>
</Center>
 
  )
}

export default InfoNumero