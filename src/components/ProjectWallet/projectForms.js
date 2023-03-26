import React from "react";
import "./projectForms.css";
import "./projectForms-mobile.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userLogin from "../../redux/actions";
import walletIcon from "../../images/projectWallet/walletIcon.png";

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
      return alert("Por favor insira seu Nome e Email");
    }
    const { dispatchLogin } = this.props;
    await dispatchLogin(this.state);
    const { history } = this.props;
    history.push("/projectWallet");
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="main-form">
        <div className="form-container"> 
        <h1 id="title-form">CADASTRO</h1> 
        <img src={walletIcon} alt="wallet" id="walletIcon" />
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
                />
              </div>
            </div>
            <br />
            <div>
              <br />
              <button
                type="button"
                id="btn-forms"
                onClick={this.handleClick}
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
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
