import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import Search from 'antd/es/input/Search'
import React from 'react'

const Autor = () => {
    const user = {
        name: "dani",
        rol: 'Autor'
    }
  return (
    <>
    <Box display={'flex'} flexDirection='column'alignItems='center'>
        <Box w='14vw'py='1%'px={'2%'} border={'1px solid grey'} borderRadius={10}margin={10}>
            <Center>
                <Text>Has ingresado como {user.rol} </Text>
            </Center>
        </Box>
    </Box>
    <Center>
        <Box >
            <Box width='80vw'display='flex' alignItems='center' justifyContent='center' p={5}>
                <Button w='9vw'margin={2} p={2}>+ Enviar articulo</Button>
                <Search ></Search>
            </Box>
            <Box>
                <Box>
                    hello
                </Box>
            </Box>
        </Box>
    </Center>
    </>
  )
}

export default Autor