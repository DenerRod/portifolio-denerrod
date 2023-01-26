import React from "react";
import imgSearch from "../images/imgShoppingCart/seachIconWhite.png";
import { getAllProduts, searchProducts } from "../utils/fetchAPIShoppingCart.js/fetchAPI";
import Loading from "./Loading/loading";

class ShoppingCart extends React.Component {
    state = {
        carrinho: '',
        showLoading: false,
    }

    createCustomElement = (element, className, innerText) => {
        const product = document.createElement(element);
        product.className = className;
        if (className === 'item__title' || innerText === 'Adicionar ao carrinho!') {
            product.innerText = innerText;
        } else {
            product.innerText = `${innerText.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        }
        return product;
    }

    createProductImageElement = (imageSource) => {
        const img = document.createElement('img');
        img.className = 'item__image';
        img.src = imageSource;
        return img;
    }

    createProductItemElement = ({ name, image, price }) => {
        const { createCustomElement, createProductImageElement } = this;
        const section = document.createElement('section');
        section.className = 'item';
        section.appendChild(createProductImageElement(image));
        section.appendChild(createCustomElement('span', 'item__title', name));
        section.appendChild(createCustomElement('span', 'item__price', price));
        section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
        return section;
      }


      componentDidMount = async () => {
        const { createProductItemElement } = this;
        const products = await getAllProduts();
        const { results } = await products;
        results.forEach((product) => {
            const { 
                title: name, 
                thumbnail: image, 
                price,
              } = product;

            const itemProduct = createProductItemElement({ name, image, price });
            document.querySelector('.items').appendChild(itemProduct);
        })
    }


    newSearchResults = () => {
      const existingItems = document.querySelectorAll('.item');
      existingItems.forEach((item) => {
        item.remove();
      })
      this.setState({ showLoading: true });
    }

    handleClick = async () => {
      const { createProductItemElement, newSearchResults } = this;
        const getInputSearch = document.querySelector('.searchInput');
        newSearchResults()
        const products = await searchProducts(getInputSearch.value)
        /* console.log(products.results); */
        const { results } = await products;
        results.forEach((product) => {
            const { 
                title: name, 
                thumbnail: image, 
                price,
              } = product;

            const itemProduct = createProductItemElement({ name, image, price });
            document.querySelector('.items').appendChild(itemProduct);
            this.setState({ showLoading: false });
        })
    }

 
  render() {
    const { showLoading } = this.state;
    return (
      <div className="bodyCart">
        <header className="shopping-header">
          <h1 id="shopping-header-title">ShoppingCart</h1>

          <form action="" className="trybewarts-login">
            <img
              src={imgSearch}
              alt="search"
              className="shopping-search-icon"
            />
            <input
              type="text"
              className="searchInput"
              name="search"
              placeholder="Digite a categoria do produto"
              onClick={this.createProducts}
            />
            <button type="button" className="btn-search" onClick={this.handleClick}>Pesquisar</button>
          </form>
        </header>
        <div className="bodyShopping">
            <section className="items">
              { showLoading && <Loading /> }
            </section> 
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
