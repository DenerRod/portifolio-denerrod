import React from 'react';
import { Link } from 'react-router-dom';
import imgPixelsArt from "../images/imgProjects/imgPixelsArt.png"
import imgTrybeWarts from "../images/imgProjects/trybeWarts.png"
import imgShoppingCart from "../images/imgProjects/projectShoppingCart.png"
/* import { connect } from 'react-redux';
import PropTypes from 'prop-types'; */

class Projects extends React.Component {
    render() {
      return(
          <div className="listProject">

            <div className="projectPxART">
              <Link to="/projectPixelsArt">
                <img src={imgPixelsArt} alt="" id="pixelArtImg" />
              </Link>
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Pixes Art</h1>
{/*                 <span id="explainPxArt">
                  Primeiro projeto que realizei utilizando HTML/CSS. O modelo se da para <br/> que o usuário selecione uma cor e assim podendo pintar o quadro de pixels,<br/> utilizando sua imaginação poderá criar varia desenhos e formatos apenas com pixels!
                </span> */}
              </div>
            </div>

            <div className="projectTwarts">
              <Link to="/projectTrybeWarts">
                <img src={imgTrybeWarts} alt="" id="trybeWartsImg" /> 
              </Link>
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Trybe Warts</h1>
              </div>
            </div>

            <div className="projectShCart">
              <Link to="/projectShoppingCart">
                <img src={imgShoppingCart} alt="" id="shoppingCartImg" />   
              </Link>
              <div className="spanProjects">
                <h1 className="nameProject">Projeto Shopping Cart</h1>
              </div>
            </div>

          </div>
      )
    }
}

export default Projects;