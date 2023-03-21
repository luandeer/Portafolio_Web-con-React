import React from "react";
import "./about.css";
import ME from "../../assets/img/me-about.jpg";
import { IoLanguage } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>LLega a saber</h5>
      <h2>Acerca de mi</h2>
      <div className="container about-container">
        <div className="about-me">
          <img src={ME} alt="yo" className="about-me-image" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Educacion</h5>
              <small> 
              <ul>
                  <li>UNMSM - Ingeniería de Software</li>
                  <li>PLATZI - Frontend Developer Javascript</li>
                  <li>One Oracle Next education - Frontend Developer</li>
                </ul>
              </small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Proyectos</h5>
              <small>
                <ul>
                  <li>Páginas Estáticas</li>
                  <li>Páginas Dinámicas</li>
                </ul>
              </small>
            </article>
            <article className="about-card">
              <IoLanguage className="about-icon" />
              <h5>Idiomas</h5>
              <small>
                <ul>
                  <li>Ingles(B12)</li> 
                  <li>Español(nativo)</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Hola, mi nombre es Telmo. Actualmente soy estudiante de octavo ciclo
            en Ingeniería de Software de la Universidad Nacional Mayor de San
            Marcos, tambien soy estudiante en la especialidad de desarrollo
            front end de Platzi y del programa One Oracle Next Education.
          </p>
          <a href="#contact" className="btn btn-primary">
            Enviame un mensaje
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
