import React from 'react';
import { Link } from 'react-router-dom';
/* import { connect } from 'react-redux';
import PropTypes from 'prop-types'; */

class Projects extends React.Component {
    render() {
      return(
          <div className="projects">
            <li><Link className="listProject" to="/projectPixelsArt">Projeto Pixels Art</Link></li>
            <li><Link className="listProject" to="/projectTrybeWarts">Projeto Trybe Warts</Link></li>
            <li><Link className="listProject" to="/projectShoppingCart">Projeto Shopping Cart</Link></li>
          </div>
      )
    }
}

export default Projects;