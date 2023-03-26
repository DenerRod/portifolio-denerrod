import React from "react";
import "./projectShoppingCart.css"
import "./projectShoppingCart-mobile.css"
import imgSearch from "../../images/imgShoppingCart/seachIconWhite.png";
import imgCartShopping from "../../images/imgShoppingCart/carrinho-de-compras.png";
import {
  getAllProduts,
  searchProducts,
  getAllCategories,
} from "../../utils/fetchAPIShoppingCart.js/fetchAPI";
import iconCartList from "../../images/imgShoppingCart/cartIcon.png";
/* import Loading from "./Loading/loading"; */
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ShoppingCart extends React.Component {
  state = {
    carrinho: 0,
    /* showLoading: false, */
  };

  createCustomElement = (element, className, innerText) => {
    const { handleClickAddToCart } = this;
    const product = document.createElement(element);
    product.className = className;
    if (className === "item__add" /* || className === "item__buy" */) {
      product.addEventListener("click", handleClickAddToCart);
    }
    if (
      className === "item__title" ||
      className === "item__buy" ||
      className === "item__add" ||
      className === "itemCart"
    ) {
      product.innerText = innerText;
    }
    if (className === "item__price") {
      product.innerText = `R$ ${innerText}`;
    }
    return product;
  };

  createCategoryOptions = (element, className, innerText) => {
    const product = document.createElement(element);
    product.className = className;
    product.innerText = innerText;
    return product;
  };

  createProductImageElement = (imageSource, className = "cartIcon") => {
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
    );

    divSection
      .appendChild(
        createCustomElement("button", "item__add", "Adicionar ao carrinho 🛒")
      )
    return section;
  };

  componentDidMount = async () => {
    /*     this.setState({showLoading: true})
    setInterval(() => {
      this.setState({showLoading: false});
    }, 400) */

    const {
      createProductItemElement,
      createCategoryOptions,
      handleClickCategory,
    } = this;
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
        const optionCategory = createCategoryOptions(
          "p",
          "optionCategory",
          name
        );
        document
          .querySelector(".title-options")
          .appendChild(optionCategory)
          .addEventListener("click", handleClickCategory);
      }
    });
  };

  newSearchResults = () => {
    const existingItems = document.querySelectorAll(".item");
    existingItems.forEach((item) => {
      item.remove();
    });
    /*     this.setState({ showLoading: true }); */
  };

  handleClickSearch = async () => {
    const { createProductItemElement, newSearchResults } = this;
    const getInputSearch = document.querySelector(".searchInput");
    newSearchResults();
    if (getInputSearch.value === "") {
      alert(`insira o nome do produto !`);
      this.componentDidMount();
    }

    const products = await searchProducts(getInputSearch.value);
    /* console.log(products.results); */
    const { results } = await products;
    results.forEach((product) => {
      const { title: name, thumbnail: image, price } = product;

      const itemProduct = createProductItemElement({ name, image, price });
      document.querySelector(".items").appendChild(itemProduct);
      /* this.setState({ showLoading: false }); */
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
      /* this.setState({ showLoading: false }); */
    });
  };

  handleClickAddToCart = (event) => {
    const { createCustomElement } = this;
    const { carrinho } = this.state;

    const itemSelector = event.composedPath()[2].childNodes[1].innerHTML;
    const imgItemSelector = event.composedPath()[2].childNodes[0].src;
    const priceItemSelector = event.composedPath()[2].childNodes[2].innerHTML;

    console.log(priceItemSelector);

    const totalPrice = parseFloat(priceItemSelector.slice(3, 14));

    console.log(totalPrice);

    if (carrinho === 0) {
      this.setState({}, () => {
        this.setState({ carrinho: totalPrice });
      });
    } else {
      this.setState((prevState) => ({
        ...prevState.carrinho,
        carrinho: prevState.carrinho + totalPrice,
      }));
    }

    const divCart = document.querySelector(".cart-itens");

    divCart.appendChild(createCustomElement("img", "imgItemCart", "img")).src =
      imgItemSelector;

    divCart.appendChild(createCustomElement("p", "itemCart", itemSelector));
  };

  clearCart = () => {
    const imgItem = document.querySelectorAll(".imgItemCart");
    const titleItem = document.querySelectorAll(".itemCart");

    console.log(imgItem);
    console.log(titleItem);

    for (let i = 0; i < imgItem.length; i++) {
      imgItem[i].remove();
    }

    for (let i = 0; i < titleItem.length; i++) {
      titleItem[i].remove();
    }

    this.setState({
      carrinho: 0,
    });
  };

  render() {
    const { carrinho /* , showLoading */ } = this.state;
    return (
      <div className="bodyCart">
        <header className="shopping-header">

          <div className="divHeaderTitle">
            <h1 id="shopping-header-title">ShoppingCart</h1>
            <img src={imgCartShopping} alt="ShoppingCart" id="img-shopping" />
          </div>

          <div className="divHeaderForm">
            <form action="">
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
          </div>
          
        </header>

        <div className="bodyShopping">
          <div className="container-categories">
            <div>
              <h1 className="title-options">Categorias</h1>
            </div>
          </div>

          <section className="items">
            {/* {showLoading && <Loading />} */}
          </section>

          <div className="container-cart">
            <div className="container-headerCart">
              <h1 className="title-cart">Carrinho</h1>
              <img src={iconCartList} alt="cartIcon" id="iconCartList" />
            </div>

            <div className="cart-itens">
              {
                carrinho !== 0 
                ? 
                <p className="totalIntems">{`TOTAL :  R$ ${(this.state.carrinho * 100) / 100}`}</p> 
                : 
                <p className="totalIntemsHide"></p>
              }
            </div>
            {carrinho !== 0 ? (
              <button
                type="button"
                className="clearCart"
                onClick={this.clearCart}
              >
                Esvaziar
              </button>
            ) : (
              <button
                type="button"
                className="clearCartHide"
                onClick={this.clearCart}
              ></button>
            )}
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
