import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import MagazineInfo from "./components/MagazineInfo/MagazineInfo";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import Autor from "./components/Autor/Autor";
import Publish from "./components/Publish/Publish";

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MagazineInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/autor" element={<Autor />} />
          <Route path="/publish" element={<Publish />} />


        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
