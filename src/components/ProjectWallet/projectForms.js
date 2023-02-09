import React from "react";
import "./projectForms.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userLogin from "../../redux/actions";
import walletIcon from "../../images/projectWallet/walletIcon.png"

class projectForms extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const inputName = document.getElementById("inputNameLogin");
    const inputEmail = document.getElementById("inputEmailLogin");
    if (inputName.value === "" || inputEmail.value === "") {
      return alert("Please enter your Name and Email");
    }
    const { dispatchLogin } = this.props;
    await dispatchLogin(this.state);
    const { history } = this.props;
    history.push("/projectWallet");
  };

  render() {
    const { name, email } = this.state;
    return (
      <>
        <div className="container">
          <div className="content">
            <div className="loginTitle">
              <h1
                id="titleInputData"
                className="text-center text-2xl tracking-tight text-gray-900"
              >
                Cadastro
              </h1>
              <img src={walletIcon} alt="walletIcon" id="walletHeaderImg" />
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
              <div className="mb-6">
                  <label
                    htmlFor="inputName"
                    className="block mb-5 text-md font-medium text-gray-900 dark:text-white fontMukta"
                  />
                  <input
                    id="inputNameLogin"
                    name="name"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={this.handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <br />
                <br />
                <div className="mb-6">
                  <label
                    htmlFor="inputEmail"
                    className="block mb-5 text-md font-medium text-gray-900 dark:text-white fontMukta"
                  />
                  <input
                    id="inputEmailLogin"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <br />
              <div>
                <br />
                <button type="button" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 fontMukta" onClick={this.handleClick}>
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

projectForms.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (dados) => dispatch(userLogin(dados)),
});

export default connect(null, mapDispatchToProps)(projectForms);
