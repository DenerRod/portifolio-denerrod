import React from "react";
import "./projectPixelsArt.css"

class projectPixelsArt extends React.Component {
  constructor() {
    super();

    this.state = {
      corSelecionada: "white",
    };

    this.selectColor = this.selectColor.bind(this);
  }

  async selectColor(event) {
    await this.setState({ corSelecionada: event.target.classList[0] });
    console.log(this.state.corSelecionada);
  }

  applyColor = (event) => {
    event.target.classList = `pixel ${this.state.corSelecionada}`;
  };

  clearAll = () => {
    const element = document.querySelectorAll(".pixel");
    console.log(element[0].classList);

    for (let i = 0; i < element.length; i++) {
      element[i].classList = "pixel white";
    }
  };

  render() {
    const { applyColor, selectColor, clearAll } = this;
    return (
      <div className="PixelArtBlock">
      <div className="containerPixelsArt">
        <header>
          <h1 id="title">Paleta de Cores</h1>
        </header>
        <section id="contentSection">
          <div id="color-palette">
            <p id="choseTitle">Escolha uma cor de sua prefêrencia para pintar! 👇🏻</p>
            <div className="white color" onClick={selectColor}></div>
            <div className="black color selected " onClick={selectColor}></div>
            <div className="green color " onClick={selectColor}></div>
            <div className="blue color " onClick={selectColor}></div>
            <div className="yellow color" onClick={selectColor}></div>
          </div>

          <button className="btnClear" onClick={clearAll}>
            Limpar Tudo
          </button>
        </section>
        <main className="mainPxArt">
          <section id="pixel-board">
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>

            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>

            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>

            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>

            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
            <div className="pixel white" onClick={applyColor}></div>
          </section>
        </main>
      </div>
      </div>
    );
  }
}

export default projectPixelsArt;
