import React from 'react';
import { Link } from 'react-router-dom';
import imgPixelsArt from "../images/imgProjects/imgPixelsArt.png"
import imgTrybeWarts from "../images/imgProjects/trybeWarts.png"
import imgShoppingCart from "../images/imgProjects/imgShoppingCart.png"
import imgWallet from "../images/imgProjects/projectWallet.png"
import imgMarioGame from "../images/imgProjects/projectMarioGame.png"
/* import { connect } from 'react-redux';
import PropTypes from 'prop-types'; */

class Projects extends React.Component {
    render() {
      return(
          <div className="listProject">

            <div className="projectCard">
              <Link to="/projectPixelsArt">
                <img src={imgPixelsArt} alt="" className="projectImg" />
              
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Pixes Art</h1>
                <p className="explainProject">
                  Primeiro projeto que realizei utilizando HTML/CSS. O modelo se da para que o usuário selecione uma cor e assim podendo pintar o quadro de pixels, utilizando sua imaginação poderá criar varia desenhos e formatos apenas com pixels!
                </p>
              </div>
              </Link>
            </div>

            <div className="projectCard">
              <Link to="/projectTrybeWarts">
                <img src={imgTrybeWarts} alt="" className="projectImg" /> 
              
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Trybe Warts</h1>
                <p className="explainProject">
                  Projeto onde coloquei em prática meus estudos em organização de formulário, e o tema escolhido foi Harry Potter, onde o usuário faz seu cadastro de avaliação da própria página e preenchendo os dados de acordo com seus gostos e afinades na área de Desnvolvimento Web e atrações favoritas de Harry Potter! 
                </p>
              </div>
              </Link>
            </div>

            <div className="projectCard">
              <Link to="/projectShoppingCart">
                <img src={imgShoppingCart} alt="" className="projectImg" />   
              
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Shopping Cart</h1>
                <p className="explainProject">
                  Uns de meus projetos que mais tive realizações, página realizda pela primeira vez utilizando a biblioteca React e gerenciamento de estado através da biblioteca Redux, fiz requisições para a API pública do Mercado Livre tratando todos os dados vindo dela para melhor visualização do usuário, tranfomando uma página de E-commerce onde o usuário poderá filtar produtos por categoría para compra, ou até mesmo selecionar produtos para adicionar ao seu carrinho!
                </p>
              </div>
              </Link>
            </div>

            <div className="projectCard">
              <Link to="/projectForms">
              <img src={imgWallet} alt="" className="projectImg" />   
              
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Wallet</h1>
                <p className="explainProject">
                  Projeto React com gerenciamento de estado através da biblioteca Redux, onde primeiramente o usuário realizada seu cadastro para entrar na aplicação guardando seus dados no estado global para a personalização, com finalidade de organização financeira e dispesas.
                </p>
              </div>
              </Link>
            </div>

            <div className="projectCard">
              <Link to="/projectMarioGameInstructions">
              <img src={imgMarioGame} alt="" className="projectImg" />  
              
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Mario Game</h1>
                <p className="explainProject">
                  Projeto criado com inspirações do jogo Mario, feito com React e gerenciamento de estado onde quis aplicar e treinar mais meus conhecimentos em estruturas condicionais IF/ELSE. O jogo consiste fazer pontuação atráves das moedas que ficam em cima do pipe, onde o jogador deverá pular para conseguir ir acumulando pontuações!
                </p>
              </div>
              </Link>
            </div>
        </div>
      )
    }
}

export default Projects;