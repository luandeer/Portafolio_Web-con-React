// se usa el atajo "rafce"
import React from 'react'
import Header from "./componentes/header/Header"
import Nav from "./componentes/nav/Nav"
import About from "./componentes/about/About"
import Tecnology from "./componentes/tecnology/Tecnology"
//import Services from "./componentes/services/Services"
import Portafolio from "./componentes/portafolio/Portafolio"
import Contact from "./componentes/contact/Contact"
import Footer from "./componentes/footer/Footer"


const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Tecnology/>
        {/*<Services/>*/}
        <Portafolio/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App