import React from "react";
import "./projectMarioGame.css";
import imgSuperMarioLogo from "../../images/imgMarioGame/superMarioLogo.png";
import imgPipe from "../../images/imgMarioGame/pipe.png";
import imgSuperMario from "../../images/imgMarioGame/super-Mario.gif";
import imgSuperMarioLose from "../../images/imgMarioGame/super-Mario-Lose.png";
import imgMarioClouds from "../../images/imgMarioGame/mario-clouds.png";
import imgGameOver from "../../images/imgMarioGame/gameOver.png";
import imgBlock from "../../images/imgMarioGame/blockMario.png";
import imgGround from "../../images/imgMarioGame/groundMario.png";
import imgCoin from "../../images/imgMarioGame/coinMario.png";

class MarioGame extends React.Component {
  state = {
    points: 0,
    gameOver: 0,
  };

  getPoints = setInterval(() => {
    const { points } = this.state;

    const getPipe = document.querySelector(".pipe");
    const pipePosition = getPipe.offsetLeft;

    const getMario = document.getElementById("superMario");
    const marioPosition = +window
      .getComputedStyle(getMario)
      .bottom.replace("px", "");

    const getCoin = document.getElementById("coinGet");
    const getCoin2 = document.getElementById("coin");

    if (pipePosition <= 144 && marioPosition >= 230) {

      getCoin.classList.remove("coinNotGet");

      getCoin.classList.add("coinGet");

      setTimeout(() => {
        getCoin.classList.remove("coinGet");

        getCoin.classList.add("coinNotGet");
      }, 250)


      if (this.state.points >= 5) {
        getPipe.style.animation = "pipe-animation 2.3s infinite linear"

        getCoin2.style.animation = "coin-animation 2.3s infinite linear"
      } if (this.state.points >= 10) {
        getPipe.style.animation = "pipe-animation 2.1s infinite linear"

        getCoin2.style.animation = "coin-animation 2.1s infinite linear"
      } if (this.state.points >= 15) {
        getPipe.style.animation = "pipe-animation 1.8s infinite linear"

        getCoin2.style.animation = "coin-animation 1.8s infinite linear"
      } if (this.state.points >= 20) {
        getPipe.style.animation = "pipe-animation 1.6s infinite linear"

        getCoin2.style.animation = "coin-animation 1.6s infinite linear"
      } if (this.state.points >= 30) {
        getPipe.style.animation = "pipe-animation 1.4s infinite linear"

        getCoin2.style.animation = "coin-animation 1.4s infinite linear"
      }


      if (points === 0) {
        this.setState({
          points: 1,
        });
      } else {
        this.setState((prevState) => ({
          points: prevState.points + 1,
        }));
      }
    }
  }, 250);

  verifyGame = setInterval(() => {
    const getPipe = document.querySelector(".pipe");
    const pipePosition = getPipe.offsetLeft;

    const getMario = document.getElementById("superMario");
    const marioPosition = +window
      .getComputedStyle(getMario)
      .bottom.replace("px", "");

    const getCoin = document.getElementById("coin");

    if (pipePosition <= 145 && pipePosition > 0 && marioPosition < 210) {
      getPipe.style.animation = "none";
      getPipe.style.left = `${pipePosition}px`;

      getCoin.style.animation = "none";
      getCoin.style.left = `${pipePosition + 50}px`;

      getMario.style.animation = "none";
      getMario.style.bottom = `${marioPosition}px`;

      getMario.src = imgSuperMarioLose;
      getMario.classList = "superMarioLose";

      this.setState({
        gameOver: 1,
      });
      
      clearInterval(this.verifyGame);
    }
  }, 10);

  jumpMario = () => {
    const getMario = document.querySelector(".superMario");

    getMario.classList.add("jump");

    setTimeout(() => {
      getMario.classList.remove("jump");
    }, 500);
  };

  addEvent = (e) => {
    if (e.keyCode === 32) {
      this.jumpMario();
    } else {
    }
  };

  reloadGame = (e) => {
    window.location.reload();
  }

  render() {
    const { points, gameOver } = this.state;
    const { addEvent } = this;
    window.onkeydown = addEvent;
    return (
      <div>
        <div className="game-board" id="bodyGame" onClick={this.jumpMario}>
          <img
            src={imgSuperMarioLogo}
            alt="SuperMarioLogo"
            className="SuperMarioLogo"
          />

          {
            gameOver === 1 
            ? 
            (
              <img src={imgGameOver} alt="SuperMarioLogo" className="gameOver" onMouseOver={ this.reloadGame }/>
            ) 
            : 
            (
              <img
                src={imgGameOver}
                alt="SuperMarioLogo"
                className="gameOverNo"
              />
            )
          }

          <div className="score-container">
            <div className="score-title">
              <img src={imgCoin} alt="coin" className="score-coin" />
            </div>

            <div className="score-points">
              <p>{`x ${points}`}</p>
            </div>
          </div>

          <img src={imgMarioClouds} alt="cloudsMario" className="marioClouds" />
          <img
            src={imgSuperMario}
            alt="superMario"
            className="superMario"
            id="superMario"
          />
          <img src={imgCoin} alt="coin" className="coin" id="coin" />
          <img src={imgCoin} alt="coin" className="coinNotGet" id="coinGet" />
          <img src={imgPipe} alt="pipe" className="pipe" />
          <img src={imgBlock} alt="block" className="block" />
          <img src={imgGround} alt="ground" className="ground" />
        </div>
      </div>
    );
  }
}

export default MarioGame;
