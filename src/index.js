//REACT 17
//Esto es una libreria de react
//import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css"
//Esto es una funcion de la libreria ReactDOM, Con esta funcion se puede actualizar dinamicamente el contenido de una pagina web con react.
//ReactDOM.render(<App/>, document.querySelector("#root"))

// REACT 18
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);