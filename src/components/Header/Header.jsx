import { Box } from '@chakra-ui/react'
import { Button, Flex } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'


const Header = () => {
  return (
    <Box py={5} px={6}>

    <Flex className='header'justify='space-between'>
        <div>
        Logo Index
        </div>
        <Flex gap="large">
            <div>
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
            </div>
            <div>
                inicio
            </div>
            <div>
                SOCHINEP
            </div>
            <div>
                English
            </div>
            <div>
                <Button>Enviar Articulo</Button>
            </div>
        </Flex>
    </Flex>
    </Box>
  )
}

export default Header