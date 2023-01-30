import React from "react";
import imgSearch from "../images/imgShoppingCart/seachIconWhite.png";
import imgCartShopping from "../images/imgShoppingCart/carrinho-de-compras.png"
import {
  getAllProduts,
  searchProducts,
  getAllCategories,
} from "../utils/fetchAPIShoppingCart.js/fetchAPI";
import cartIcon from "../images/imgShoppingCart/cartIcon.png"
import iconCartList from "../images/imgShoppingCart/iconCartList.png"
import Loading from "./Loading/loading";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  state = {
    carrinho: "",
    showLoading: false,
  };

  createCustomElement = (element, className, innerText) => {
    const product = document.createElement(element);
    product.className = className;
    if (className === "item__title" || innerText === "Adicionar ao carrinho!") {
      product.innerText = innerText;
    } else {
      product.innerText = `${innerText.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`;
    }
    return product;
  };

  createCategoryOptions = (element, className, innerText) => {
    const product = document.createElement(element);
    product.className = className;
    product.innerText = innerText;
    return product;
  };

  createProductImageElement = (imageSource) => {
    const img = document.createElement("img");
    img.className = "item__image";
    img.src = imageSource;
    return img;
  };

  createProductItemElement = ({ name, image, price }) => {
    const { createCustomElement, createProductImageElement } = this;
    const section = document.createElement("section");
    section.className = "item";
    section.appendChild(createProductImageElement(image));
    section.appendChild(createCustomElement("span", "item__title", name));
    section.appendChild(createCustomElement("span", "item__price", price));

    const divSection = document.createElement("div");
    divSection.className = "divSection";
    section.appendChild(divSection);

    divSection.appendChild(
      createCustomElement("button", "item__buy", "Comprar")
    )
    
    divSection.appendChild(
      createCustomElement("button", "item__add", "Adicionar ao carrinho")
    ).appendChild(createCustomElement("img", "cartIcon", "img")).src = cartIcon;
    return section;
  };

  componentDidMount = async () => {
    this.setState({showLoading: true})
    setInterval(() => {
      this.setState({showLoading: false});
    }, 400)

    const { createProductItemElement, createCategoryOptions, handleClickCategory } = this;
    const products = await getAllProduts();
    const { results } = await products;
    results.forEach((product) => {
      const { title: name, thumbnail: image, price } = product;

      const itemProduct = createProductItemElement({ name, image, price });
      document.querySelector(".items").appendChild(itemProduct);
    });

    const categories = await getAllCategories();
    categories.forEach((category) => {
      const { name } = category;

      if (name !== "Mais Categorias") {
        const optionCategory = createCategoryOptions("li", "optionCategory", name);
        document.querySelector(".title-options").appendChild(optionCategory).addEventListener("click", handleClickCategory);
      }
    })
  };

  newSearchResults = () => {
    const existingItems = document.querySelectorAll(".item");
    existingItems.forEach((item) => {
      item.remove();
    });
    this.setState({ showLoading: true });
  };

  handleClickSearch = async () => {
    const { name } = this.props
    const { createProductItemElement, newSearchResults } = this;
    const getInputSearch = document.querySelector(".searchInput");
    newSearchResults();
    if (getInputSearch.value === '') {
      alert(`${name}, insira o nome do produto !`)
      this.componentDidMount()
    }
    
    const products = await searchProducts(getInputSearch.value);
    /* console.log(products.results); */
    const { results } = await products;
    results.forEach((product) => {
      const { title: name, thumbnail: image, price } = product;

      const itemProduct = createProductItemElement({ name, image, price });
      document.querySelector(".items").appendChild(itemProduct);
      this.setState({ showLoading: false });
    });
  };

  handleClickCategory = async (event) => {
    const { createProductItemElement, newSearchResults } = this;
    const getCategory = event.target.innerHTML;
    newSearchResults();
    const products = await searchProducts(getCategory);
    /* console.log(products.results); */
    const { results } = await products;
    results.forEach((product) => {
      const { title: name, thumbnail: image, price } = product;

      const itemProduct = createProductItemElement({ name, image, price });
      document.querySelector(".items").appendChild(itemProduct);
      this.setState({ showLoading: false });
    });
  }

  render() {
    const { showLoading } = this.state;
    return (
      <div className="bodyCart">
        <header className="shopping-header">
          <h1 id="shopping-header-title">ShoppingCart</h1>
          <img src={ imgCartShopping } alt="ShoppingCart" id="img-shopping" />

          <form action="" className="trybewarts-login">
            <input
              type="text"
              className="searchInput"
              name="search"
              placeholder="Digite nome do produto"
              onClick={this.createProducts}
            />
          </form>
          
          <button
              type="button"
              className="btn-search"
              onClick={this.handleClickSearch}
            >
              <img
                src={imgSearch}
                alt="search"
                className="shopping-search-icon"
              />
            </button>
        </header>

        <div className="bodyShopping">

          <div className="container-categories">
            <ul className="title-options">Categorias</ul>
          </div>
          
          <section className="items">{showLoading && <Loading />}</section>

          <div className="container-cart">

            <div className="container-headerCart">
              <h1 className="title-cart">CART</h1>
              <img src={iconCartList} alt="cartIcon" id="iconCartList"/>
            </div>

            <div className="cart-itens">
              <p>ITEM</p>
            </div>

          </div>
  
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
});

ShoppingCart.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default connect(mapStateToProps)(ShoppingCart);

