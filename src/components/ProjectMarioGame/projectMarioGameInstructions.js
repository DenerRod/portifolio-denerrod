import React from "react";
import { Link } from "react-router-dom";
import "./projectMarioGameInstructions.css";
import imgSuperMarioLogo from "../../images/imgMarioGame/superMarioLogo.png";
import imgSuperMario from "../../images/imgMarioGame/MarioInstructions.png";
import imgLuigiMario from "../../images/imgMarioGame/luigiMario.png";
import imgMarioClouds from "../../images/imgMarioGame/mario-clouds.png";

class MarioGameInstructions extends React.Component {
  render() {
    return (
      <div>
        <div className="instructions-board" id="bodyGame">
          <img
            src={imgSuperMarioLogo}
            alt="SuperMarioLogo"
            className="marioLogoInstructions"
          />

          <img
            src={imgMarioClouds}
            alt="cloudsMario"
            className="cloudsInstructions"
          />

          <div className="container-instructions">
            <h1 id="titleInstructions">Instruções do jogo:</h1>
            <br />
            <p>Para saltar: pressione a barra de espaço</p>
            <br />
            <p>ou</p>
            <br />
            <p>Para saltar: click com botão esquerdo do mouse</p>
            <br />
            <p>Para jogar novamente: click 2x (duas) vezes na tela</p>
            <br />
            <h3 id="motivationInstructions">Consiga maior números de moedas que conseguir!</h3>

            <Link to="/projectMarioGame">
              <button type="button" className="btn-play">
                JOGAR
              </button>
            </Link>
          </div>
          <img
            src={imgSuperMario}
            alt="superMario"
            className="marioInstructions"
          />

          <img
            src={imgLuigiMario}
            alt="superMario"
            className="luigiInstructions"
          />
        </div>
      </div>
    );
  }
}

export default MarioGameInstructions;
