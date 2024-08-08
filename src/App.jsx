
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header/Header";
import Magazine from "./components/Magazine/Magazine";
import MagazineMenu from "./components/MagazineMenu/MagazineMenu";
import MagazineInfo from "./components/MagazineInfo/MagazineInfo";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider>

    <BrowserRouter>
          <Header/>
          <MagazineInfo/>
      <Routes>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    
  )
}

export default App
