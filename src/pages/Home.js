import React from "react";
/* import { Link } from 'react-router-dom'; */
import Projects from "../pages/Projects";
import portifolioIcons from "../images/imgHome/portifolioIcon.png";
import DenerImg from "../images/imgHome/DenerRod.png";
import gitHubIcon from "../images/imgHome/gitHubIcon.png";
import linkedinIcon from "../images/imgHome/linkedinIcon.png";
import instagramIcon from "../images/imgHome/instagramIcon.png";
import facebookIcon from "../images/imgHome/facebookIcon.png";

class Home extends React.Component {
  handleClick = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div className="homeContainer">
        <div className="homeHeader">
          <div className="homeContainerTitle">
            <img src={ portifolioIcons } alt="portifolioIcon" />
            <h1 id="homeTitle">Portifólio Dener Rodrigues</h1>
          </div>

          <div className="homeContainerWelcome">
            <h1 id="homeWelcome">Seja Bem-vindo !</h1>
          </div>

          <div className="homeContainerLinks">
            <a
              href="https://github.com/DenerRod"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHubIcon} alt="GitHub" id="gitHubIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/dener-rodrigues-634b421ba/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" id="linkedinIcon" />
            </a>
            <a
              href="https://www.instagram.com/denerrod/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" id="instagramIcon" />
            </a>
            <a
              href="https://www.facebook.com/denerrodb/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" id="facebookIcon" />
            </a>
          </div>
        </div>

        <div className="homeBody">

          <div className="containerAboutMe">
            <img src={DenerImg} alt="imgPortifolio" id="imgPortifolio" />
            <hr />
            <h4 id="titleAboutMe">
              Olá, meu nome é Dener Rodrigues Barrientos <br /> É um prazer ter
              você aqui!
            </h4>
            <p id="textAboutMe">
              Sou desenvolver Front-End, estou sempre estudando e aplicando meus conhecimentos em projetos pessoais, com  mais de uma ano de experiencia em novas skills. Atualmente me localizo como desenvolver front-ed Jr,   procurando um novo local de trabalho para colocar em prática todos meus conhecimentos, e claro, sempre aprendendo   mais para crescer profissionalmente no mercado de trabalho. Sou de Uberlândia-MG, recentemente formei na Trybe (escola de programação) estudei por um ano  Desenvolvimento Web (Front-End à Back-End), tenho habilidades em React, com componentes por classe e   funcionais, React Hooks, React Redux, consultas à API Rest.
            </p>
          </div>

          <div className="titleContainerProjects">
            <h3 id="titleProjects" >Alguns de meus Projetos</h3>
          </div>

          <div className="projectsContainer">
            < Projects />
          </div>
          
        </div>
      </div>
    );
  }
}


export default Home;
