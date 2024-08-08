import {Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'



const Magazine = () => {
return (
    <Center flexDirection={'column'} >
    <Box  width={'55vw'}>

        <Flex justify='space-between' py={4}>
            <Box p={3}> Logo revista </Box>
            <Heading>Titulo completo de la revista</Heading>
        </Flex>
        <Box w={'55vw'}  py={4}  > 
            <Text>Descripcion de la revista
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laudantium suscipit. Porro eligendi veniam sit asperiores odit velit ullam dicta consequuntur enim rem labore, quos nobis reprehenderit praesentium aperiam rerum!
            </Text>
        </Box>

    </Box>
    </Center>
    )
}

export default Magazine