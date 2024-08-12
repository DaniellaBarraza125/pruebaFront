import React from 'react'
import InfoNumero from '../InfoNumero/InfoNumero'
import { Box, Center, Flex } from '@chakra-ui/react'
import Magazine from '../Magazine/Magazine'
import MagazineMenu from '../MagazineMenu/MagazineMenu'
import Numero from '../Numero/Numero'
import Articles from '../Articles/Articles'

const MagazineInfo = () => {
  return (
    <>
    <Box>
        <Magazine/>
        <InfoNumero/>
    </Box>
    <Box>
      <Flex justifyContent={'space-between'}>

      <Numero/>
      <Articles/>
      <MagazineMenu/>
      </Flex>
    </Box>
    </>
  )
}

export default MagazineInfo