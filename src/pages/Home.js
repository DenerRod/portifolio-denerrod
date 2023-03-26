import React from "react";
/* import { Link } from 'react-router-dom'; */
/* import DenerImg from "../images/imgHome/coverHomeAboutMe.png"; */
import worldTec from "../images/imgHome/world.png";
import gitHubIcon from "../images/imgHome/gitHubIcon.png";
import linkedinIcon from "../images/imgHome/linkedinIcon.png";
import instagramIcon from "../images/imgHome/instagramIcon.png";
import facebookIcon from "../images/imgHome/facebookIcon.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeCenter">
          <div className="homeHeader">
            <img src={worldTec} alt="worldTec" className="homeIcon" />

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
          
          <div className="welcomeContainer">
            <h1 id="homeWelcome">Seja Bem-vindo!</h1>
          </div>

          <div className="containerAboutMe">
            <div className="divAboutMe">
              <p id="textAboutMe">
                Meu nome é Dener Rodrigues sou desenvolver Front-End, estou
                sempre estudando e aplicando meus conhecimentos em projetos
                pessoais, com mais de uma ano de experiencia em novas skills.
                Atualmente me localizo como desenvolver front-ed Jr, procurando
                um novo local de trabalho para colocar em prática todos meus
                conhecimentos, e claro, sempre aprendendo mais para crescer
                profissionalmente no mercado de trabalho. Sou de Uberlândia-MG,
                recentemente formei na Trybe (escola de programação) estudei por
                um ano Desenvolvimento Web (Front-End à Back-End), tenho
                habilidades em React, com componentes por classe e funcionais,
                React Hooks, React Redux, consultas à API Rest.
              </p>
            </div>

            <div className="projectsContainer">
              <Link to="/projects">
                <h1 id="titleOfProjects">Projetos</h1>  
              </Link>
              
              <Link to="/projectShoppingCart">
                <p className="projectsItem">Project Shopping Cart</p>   
              </Link>

              <Link to="/projectForms">
                <p className="projectsItem">Project Wallet</p>   
              </Link>

              <Link to="/projectMarioGameInstructions">
                <p className="projectsItem">Project Mario Game</p>   
              </Link>
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
