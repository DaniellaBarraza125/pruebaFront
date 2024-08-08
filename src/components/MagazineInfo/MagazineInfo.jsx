import React from 'react'
import InfoNumero from '../InfoNumero/InfoNumero'
import { Box, Center } from '@chakra-ui/react'
import Magazine from '../Magazine/Magazine'

const MagazineInfo = () => {
  return (
    <Box>
        <Magazine/>
        <InfoNumero/>
    </Box>
  )
}

export default MagazineInfo