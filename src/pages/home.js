import React from 'react';
import { Link } from 'react-router-dom';
 
class home extends React.Component {
    render() {
    return (
        <div className="home">
            <header>
                <h1 id="home-title">Bem-vindo ao meu Portifolio</h1>
                <ul className="home-list"> Projetos :
                    <br />
                    <br />
                    <li className="listProject" ><Link className="listProject" to="/projectPixelsArt">Projeto Pixels Art</Link></li>
                </ul>
            </header>
        </div>
    );
  };
};

export default home;