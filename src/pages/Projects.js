import React from 'react';
import { Link } from 'react-router-dom';
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