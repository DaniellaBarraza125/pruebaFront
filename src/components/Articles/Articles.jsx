import React from 'react'
import Article from '../Article/Article'
import { Box } from '@chakra-ui/react'

const Articles = () => {

  const articulos = [
    {
      id: 1,
      titulo: "Introducción a JavaScript",
      fecha: "2024-07-01",
      autor: "Carlos Pérez"
    },
    {
      id: 2,
      titulo: "Cómo mejorar tu CSS",
      fecha: "2024-07-05",
      autor: "María García"
    },
    {
      id: 3,
      titulo: "Desarrollo Web Responsivo",
      fecha: "2024-07-10",
      autor: "José Martínez"
    },
    {
      id: 4,
      titulo: "Aprendiendo React",
      fecha: "2024-07-15",
      autor: "Ana Rodríguez"
    },
    {
      id: 5,
      titulo: "Guía de Node.js para Principiantes",
      fecha: "2024-07-20",
      autor: "Luis Hernández"
    },
    {
      id: 6,
      titulo: "Cómo Usar Git y GitHub",
      fecha: "2024-07-25",
      autor: "Lucía Sánchez"
    },
    {
      id: 7,
      titulo: "Optimización de Sitios Web",
      fecha: "2024-07-30",
      autor: "Miguel López"
    },
    {
      id: 8,
      titulo: "Fundamentos de TypeScript",
      fecha: "2024-08-01",
      autor: "Javier Fernández"
    },
    {
      id: 9,
      titulo: "Conceptos Básicos de UX/UI",
      fecha: "2024-08-05",
      autor: "Elena Torres"
    },
    {
      id: 10,
      titulo: "Introducción a Python",
      fecha: "2024-08-10",
      autor: "Diego González"
    }
  ];
  
  return (
    <>

      <Box padding={10} w={'45vw'}>
        <Article articulos={articulos}/>
      </Box>

  </>
  )
}

export default Articles