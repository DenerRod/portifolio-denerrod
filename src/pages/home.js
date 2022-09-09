import React from 'react';
import { Link } from 'react-router-dom';
 
class home extends React.Component {
    render() {
    return (
        <div className="home">
            <header>
                <h1>Bem-vindo ao meu Portifolio</h1>
                <ul> Projetos :
                    <li><Link to="/projectSolarSystem">Projeto Solar System</Link></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </header>
        </div>
    );
  };
};

export default home;