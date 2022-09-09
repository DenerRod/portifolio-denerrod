import React from 'react';
import { Link } from 'react-router-dom';
 
class home extends React.Component {
    render() {
    return (
        <div className="home">
            <header>
                <h1 id="home-title">Bem-vindo ao meu Portifolio</h1>
                <ul> Projetos :
                    <li><Link to="/projectPixelsArt">Projeto Pixels Art</Link></li>
                    <li><Link to="/projetoAmor">Projeto pro meu amor</Link></li>
                </ul>
            </header>
        </div>
    );
  };
};

export default home;