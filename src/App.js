import React from "react";

import Topo from "./Componentes/Header";
import HomePage from "./Componentes/Conteudo";
import Footer from "./Componentes/Footer";

export default function App(){
  return(

    <div className="container">
      
    <Topo />
    <HomePage />
    <Footer />

    </div>

  )
}