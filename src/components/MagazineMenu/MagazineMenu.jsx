import { Box } from '@chakra-ui/react'
import React from 'react'

const MagazineMenu = () => {
  return (
    <Box border='1px black solid' width='30vw' borderRadius='5px' padding='2%' maxW='290px' margin={5} >
        <Box fontSize='20px' fontWeight='500' py='1.5vh'>Acceder</Box>
        <Box fontSize='20px' fontWeight='500'  py='1.5vh'>Sobre la Revista</Box>
        <Box fontSize='20px' fontWeight='500'  py='1.5vh'>Todos los números</Box>
        <Box fontSize='20px' fontWeight='500'  py='1.5vh'>Comité Editorial</Box>
        <Box fontSize='20px' fontWeight='500'  py='1.5vh'>Normas para autores</Box>
        <Box fontSize='20px' fontWeight='500'  py='1.5vh'>Contacto</Box>
    </Box>
  )
}

export default MagazineMenu