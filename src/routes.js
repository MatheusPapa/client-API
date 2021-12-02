import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Create from "./pages/Produtos/create";
import Index from "./pages/Produtos/index";

const Rotas = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" exact/>
        <Route element={<Create />} path="/produto"/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;