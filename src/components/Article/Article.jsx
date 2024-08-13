import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Article = ({ articulos }) => {
  
  return (
    <>
      {articulos.map((articulo) => (
        <Box key={articulo.id} display={'flex'} flexDirection={'column'} mb={5}>
          <Box>{articulo.fecha}</Box>
          <Heading py='10px' fontSize='large'>
            {articulo.titulo}
          </Heading>
          <Text py='10px'>{articulo.autor}</Text>
          <Box py='10px'>Abrir PDF</Box>
        </Box>
      ))}
    </>
  );
};

export default Article;
