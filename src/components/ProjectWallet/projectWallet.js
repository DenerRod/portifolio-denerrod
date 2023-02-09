import React from "react";
import "./projectWallet.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCoins } from "../../utils/fetchAnother/fetchCoin.js";
import walletIcon from "../../images/projectWallet/walletIcon.png"

class Wallet extends React.Component {
    state = {
        totalExpenses: 0,
        currency: [],
    };

    componentDidMount = async () => {
        const allCoins = await getAllCoins();

        this.setState({
            currency: Object.keys(allCoins),
        })
    }

    createExpensiveElemts = (element, className, innerText) => {
        const product = document.createElement(element);
        product.className = className;
        product.innerText = innerText;
        console.log(getAllCoins);
        return product;
      };


    saveExpenseState = () => {
        const { createExpensiveElemts } = this;
        const { totalExpenses } = this.state;

        const valueExpensive = document.getElementById("value").value;
        const valueDescription = document.getElementById("description").value;
        const valueCurrency = document.getElementById("currency").value;
        const valueMethod = document.getElementById("method").value;
        const valueTag = document.getElementById("tag").value;

        if (valueExpensive === "") {
            return alert("Insira o valor da despesa!")
        }

        const sectionList = document.createElement("section");
        sectionList.className = "expenseList";

        sectionList.appendChild(createExpensiveElemts("p", "itemList", `R$ ${valueExpensive}`));
        sectionList.appendChild(createExpensiveElemts("p", "itemList", valueDescription));
        sectionList.appendChild(createExpensiveElemts("p", "itemList", valueCurrency));
        sectionList.appendChild(createExpensiveElemts("p", "itemList", valueMethod));
        sectionList.appendChild(createExpensiveElemts("p", "itemList", valueTag));

        document.querySelector(".walletList").appendChild(sectionList);

        const totalPrice = parseFloat(valueExpensive.slice(0, 14));
        if (totalExpenses === 0) {
            this.setState({
                totalExpenses: totalPrice,
            })
        } else {
         this.setState((prevState) => ({
            ...prevState.totalExpenses,
            totalExpenses: prevState.totalExpenses + totalPrice,
          }));
        }

        return sectionList;
    }

  render() {
      const { name } = this.props;
      const { totalExpenses, currency } = this.state;
    return (
      <div className="container-wallet">

        <div className="walletHeader">
            <div className="headerTitle">
                <img src={walletIcon} alt="walletIcon" id="walletHeaderImg" />
                <h2 id="walletHeaderTitle">Wallet</h2>
            </div>

            <div className="headerWelcome">
                <h3 id="walletWelcome">{`Bem-vindo à sua carteira ${name}!`}</h3>
            </div>

            <div className="headerBalance">
                {
                    totalExpenses !== 0 
                    ?
                    <p id="walletBalance">{`Dispesa : R$ ${totalExpenses}`}</p> 
                    :
                    <p id="walletBalance">Dispesa : R$ 0</p> 
                }
            </div>
        </div>

        <div className="walletSetExpense">
         <form onChange={ this.handleChange } className="walletForm">

         <div className="labelForm">
           <label htmlFor="value" id="labelValue">
             Valor da Despesa:
             <input
               type="number"
               name="value"
               required="required"
               id="value"
             />
           </label>
           </div>

           <div className="labelForm">
           <label htmlFor="description" id="labelDescription"> 
             Descrição:
             <input
               type="text"
               data-testid="description-input"
               name="description"
               id="description"
               placeholder="Descrição"
             />
           </label>
           </div>

           <div className="labelForm">
           <label htmlFor="currency" id="labelCurrency">
             Moeda:
             <select
               name="currency"
               id="currency"
             >
                {

                 currency.map((curr) => (
                   <option key={ curr } value={ curr }>{curr}</option>
                 ))

                }
             </select>
           </label>
           </div>

            <div className="labelForm">
           <label htmlFor="method" id="labelMethod">
             Forma de Pagamento:
             <select name="method" id="method" data-testid="method-input">
               <option value="Dinheiro">Dinheiro</option>
               <option value="Cartão de crédito">Cartão de crédito</option>
               <option value="Cartão de débito">Cartão de débito</option>
             </select>
           </label>
           </div>

            <div className="labelForm">
           <label htmlFor="tag" id="labelTag">
             Categoria:
             <select name="tag" id="tag" data-testid="tag-input">
               <option value="Alimentação">Alimentação</option>
               <option value="Lazer">Lazer</option>
               <option value="Trabalho">Trabalho</option>
               <option value="Transporte">Transporte</option>
               <option value="Saúde">Saúde</option>
             </select>
           </label>
           </div>

           <button
            id="btnSet"
             type="reset"
             onClick={ this.saveExpenseState }
           >
             Adicionar
           </button>
         </form>
       </div>

       <div className="tableWallet">
            <h2>Valor</h2>
            <h2>Descrição</h2>
            <h2>Moeda</h2>
            <h2>Forma de Pagamento</h2>
            <h2>Categoria</h2>
       </div>

        <div className="walletList">
        </div>

      </div>
    );
  }
}

Wallet.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    name: state.name,
    email: state.email,
  });

  export default connect(mapStateToProps)(Wallet);
