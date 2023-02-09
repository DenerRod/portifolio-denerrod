import React from "react";
import "./projectTrybeWarts.css"
import trybewartsHeaderLogo from "../../images/projectTrybeWarts/trybeWartsHeaderLogo(1).png"
import trybewartsBody from "../../images/projectTrybeWarts/trybeWartsHeaderLogo-removebg-preview.png"

class projectTrybeWarts extends React.Component {
    alertLogin = () => {
        const name = document.querySelector('.name')
        const email = document.querySelector('.email');
        const password = document.querySelector('.senha');
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (emailRegex.test(email.value)) {
            if (password.value.length > 5) {
                alert(`${name.value}, Seja bem-vindo!`);
            }  else {
                alert('Usuário inválido');
            }
        }
    }
    render() {
        return (
            <div id="rootTrybeWarts">
                    <header className="header">
                        <img src={trybewartsHeaderLogo} alt="" className="trybewarts-header-logo" />

                        <h1 id="trybewarts-header-title">Trybewarts</h1>

                        <form action="" className="trybewarts-login">

                            <input type="text" className="name" name="name" placeholder="Nome" />

                            <input type="email" className="email" name="email" placeholder="Email" />

                            <input type="password" className="senha" name="password" placeholder="Senha" />

                            <button type="submit" className="btn-login" onClick={this.alertLogin}>Entrar</button>
                        </form>
                    </header>

                    <div>
                        <h2 id="title-evaluation">Formulário de Avaliação:</h2>
                    </div>

                    <main className="mainTrybeWarts">

                        <form action="" id="evaluation-form">
                            <fieldset className="fieldsetTrybeWarts">

                                <input type="text" id="input-name" placeholder="Nome" name="name" />

                                <input type="text" id="input-lastname" placeholder="Sobrenome" name="lastname" />

                                <input type="email" id="input-email" placeholder="Email" name="email-evaluation" />

                                <select name="house" id="house">

                                    <option value="Gitnória" id="gitnoria-house">Gitnória</option>

                                    <option value="Reactpuff" id="reactpuff-house">Reactpuff</option>

                                    <option value="Corvinode" id="corvinode-house">Corvinode</option>

                                    <option value="Pytherina" id="pytherina-house">Pytherina</option>

                                </select>

                            </fieldset>

                            <section>
                                <hr />
                                <div id="container">
                                    <div id="container-family">
                                        <label htmlFor="" id="label-family">Qual sua família?</label>

                                        <input type="radio" name="family" id="Front" value="Frontend" />Frontend
                                        <input type="radio" name="family" id="Back" value="Backend" />Backend
                                        <input type="radio" name="family" id="Full" value="FullStack" />FullStack
                                    </div>

                                    <div id="container-conteudo">
                                        <label htmlFor="" id="label-content">Qual conteúdo você está com mais vontade de aprender?</label>
                                        <div id="conteudo">
                                            <input type="checkbox" name="conteudo" id="HoF" value="HoFs" />HoFs
                                            <input type="checkbox" name="conteudo" id="Jes" value="Jest" />Jest
                                            <input type="checkbox" name="conteudo" id="Promise" value="Promises" />Promises
                                            <input type="checkbox" name="conteudo" id="Reac" value="React" />React
                                            <input type="checkbox" name="conteudo" id="SQ" value="SQL" />SQL
                                            <input type="checkbox" name="conteudo" id="Pytho" value="Python" />Python
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div id="container-aval">
                                    <label htmlFor="" id="label-rate">
                                        Como você avalia a Trybewarts?
                                    </label>

                                    <input type="radio" name="rate" id="aval_1" value="1" />1
                                    <input type="radio" name="rate" id="aval_2" value="2" />2
                                    <input type="radio" name="rate" id="aval_3" value="3" />3
                                    <input type="radio" name="rate" id="aval_4" value="4" />4
                                    <input type="radio" name="rate" id="aval_5" value="5" />5
                                    <input type="radio" name="rate" id="aval_6" value="6" />6
                                    <input type="radio" name="rate" id="aval_7" value="7" />7
                                    <input type="radio" name="rate" id="aval_8" value="8" />8
                                    <input type="radio" name="rate" id="aval_9" value="9" />9
                                    <input type="radio" name="rate" id="aval_10" value="10" />10
                                </div>

                                <div>
                                    <label htmlFor="comentario" className="textarea"
                                    >Deixe seu comentário:</label>
                                    <textarea
                                        name="comentario"
                                        id="textarea"
                                        maxLength="500"
                                        cols="30"
                                        rows="10"></textarea>
                                    <span id="counter"></span>
                                </div>

                                <div>
                                    <label htmlFor="agreement" id="label-infos">
                                        <input type="checkbox" name="" id="agreement" />
                                          Você concorda com o uso das informações acima?
                                    </label>
                                </div>

                                <div>
                                    <button type="submit" id="submit-btn" disabled="">Enviar</button>
                                </div>
                            </section>
                        </form>
                        <img id="trybewarts-forms-logo" src={trybewartsBody} alt="" />
                        </main>
                    <footer className="footerTW">Direitos reservados à Trybewarts©</footer>
            </div>
        )
    }
}

export default projectTrybeWarts;
