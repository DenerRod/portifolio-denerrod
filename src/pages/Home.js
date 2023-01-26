import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 
class Home extends React.Component {  
    handleClick = () => {
        console.log(this.props);
    }  
    render() {
        const { name, /* email  */} = this.props
    return (
      <div className="container">
        <div className="content">
        <h1 id="welcome">{`Seja Bem-vindo ${name}`}</h1>
        <h1 id="home-title">Bem-vindo ao meu Portifolio</h1>
        <p><Link to="/projects">Projetos</Link></p>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
    name: state.name,
    email: state.email,
  });

Home.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
  };
  
export default connect(mapStateToProps)(Home);