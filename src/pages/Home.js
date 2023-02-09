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
  render() {
    return (
      <div className="homeContainer">
        <div className="homeHeader">
          <div className="homeContainerTitle">
            <img
              src={portifolioIcons}
              alt="portifolioIcon"
              id="iconPortifolio"
            />
            <h1 id="homeTitle">Portifólio Dener Rodrigues</h1>
          </div>

          <div className="homeContainerWelcome">
            <h1 id="homeWelcome">Seja Bem-vindo!</h1>
          </div>

          <div className="homeInternalLinks">
            <a href="#projects" id="linkProjects">
              Projetos
            </a>
            <a href="#contact" id="linkContact">
              Contato
            </a>
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

        <div className="containerAboutMe">
          <img src={DenerImg} alt="imgPortifolio" id="imgPortifolio" />
          <hr />
          <div className="divAboutMe">
            <h4 id="titleAboutMe">
              Olá, meu nome é Dener Rodrigues Barrientos <br /> É um prazer ter
              você aqui!
            </h4>
            <p id="textAboutMe">
              Sou desenvolver Front-End, estou sempre estudando e aplicando meus
              conhecimentos em projetos pessoais, com mais de uma ano de
              experiencia em novas skills. Atualmente me localizo como
              desenvolver front-ed Jr, procurando um novo local de trabalho para
              colocar em prática todos meus conhecimentos, e claro, sempre
              aprendendo mais para crescer profissionalmente no mercado de
              trabalho. Sou de Uberlândia-MG, recentemente formei na Trybe
              (escola de programação) estudei por um ano Desenvolvimento Web
              (Front-End à Back-End), tenho habilidades em React, com
              componentes por classe e funcionais, React Hooks, React Redux,
              consultas à API Rest.
            </p>
          </div>
        </div>

        <div className="titleContainer">
          <h3 className="titleHr" id="projects">
            Alguns de meus Projetos
          </h3>
        </div>

        <Projects />

        <div className="titleContainer">
          <h3 className="titleHr" id="contact">
            Entre em contato
          </h3>
        </div>

        <div className="finalsContainerHome">

        <div className="contactContainer">
          <h1 className="contactTitle">Fómurlário de contato</h1>

          <form
            method="post"
            action="https://formsubmit.co/denerrodriguesbarrientos@gmail.com"
            className="formContact"
          >
            <input type="hidden" name="_captcha" value="false" />

            <label className="labelForm">Nome</label>
            <input
              type="text"
              name="name"
              required="required"
              placeholder="Nome"
              id="inputName"
            />

            <label className="labelForm">Email</label>
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Email"
              id="inputEmail"
            />

            <label className="labelForm">Mensagem</label>
            <textarea
              type="text"
              name="message"
              required="required"
              placeholder="Digite sua menssagem"
              rows="4"
              cols="50"
              id="textAreaContactForm"
            />

            <button type="submit" id="btnContactForm">
              Enviar
            </button>
          </form>
        </div>

        <div className="FooterHome">
          
            <h1 id="footerTitle">Me Siga:</h1>
         
          <a
              href="https://github.com/DenerRod"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHubIcon} alt="GitHub" id="gitHubIconFooter" />
            </a>
            <a
              href="https://www.linkedin.com/in/dener-rodrigues-634b421ba/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" id="linkedinIconFooter" />
            </a>
            <a
              href="https://www.instagram.com/denerrod/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" id="instagramIconFooter" />
            </a>
            <a
              href="https://www.facebook.com/denerrodb/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" id="facebookIconFooter" />
            </a>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
