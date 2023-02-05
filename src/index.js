//Esto es una libreria de react
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css"
//Esto es una funcion de la libreria ReactDOM, Con esta funcion se puede actualizar dinamicamente el contenido de una pagina web con react.
ReactDOM.render(<App/>, document.querySelector("#root"))