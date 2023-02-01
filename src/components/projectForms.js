import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userLogin from "../redux/actions";
/* import imgLogin from '../images/emojiWelcome.png'; */

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
    const inputName = document.getElementById("inputName");
    const inputEmail = document.getElementById("inputEmail");
    if (inputName.value === "" || inputEmail.value === "") {
      return alert("Please enter your Name and Email");
    }
    const { dispatchLogin } = this.props;
    await dispatchLogin(this.state);
    const { history } = this.props;
    history.push("/home");
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
                Login
              </h1>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
              <div class="mb-6">
                  <label
                    for="inputName"
                    class="block mb-5 text-md font-medium text-gray-900 dark:text-white fontMukta"
                  />
                  <input
                    id="inputName"
                    name="name"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={this.handleChange}
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <br />
                <hr color="gray" width="100%" height="1px" />
                <br />
                <div class="mb-6">
                  <label
                    for="inputEmail"
                    class="block mb-5 text-md font-medium text-gray-900 dark:text-white fontMukta"
                  />
                  <input
                    id="inputEmail"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="appearance-none rounded checked:bg-white-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-black-900 fontMukta"
                  >
                    Lembrar
                  </label>
                </div>
              </div>

              <div>
                <br />
                <button
/*                   type="button"
                  
                  className="group relative flex w-full justify-center rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 fontMukta" */
                  type="button" class="group relative flex w-full justify-center rounded-md text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 fontMukta"
                  onClick={this.handleClick}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
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
