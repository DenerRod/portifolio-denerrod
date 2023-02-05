import React from "react";
import { Link } from 'react-router-dom'; 

class ThanksPage extends React.Component {
    render() {
        return (
            <div className="thanksPag">
                <h1 className="titleThanksPag">Obrigado por me enviar uma menssagem!<br/>Retornarei em breve!</h1>
                <Link to="/portifolio-denerrod">
                    <button type="button" className="btnBackHome" onClick={this.backToHome}>Voltar ao menu</button> 
                </Link>   
            </div>
        )
    }
}

export default ThanksPage