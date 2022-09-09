import React from 'react';

class projectPixelsArt extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      corSelecionada: '',
    }
  };

  handleClick(event) {
    this.setState({ corSelecionada: event.target.classList[0] })
  };

  aplicaCor(event) {
    const corAplicada = this.state

    corAplicada.classList = 'pixel ' + corAplicada + 'black';
  }


  render() {
    console.log(this.state);
    return (
      <div>
      <header>

        <h1 id="title">Paleta de Cores</h1>

      </header><section>

          <div id="color-palette">
            <div class="black color selected " onClick={ this.handleClick }></div>
            <div class="green color " onClick={ this.handleClick }></div>
            <div class="blue color " onClick={ this.handleClick }></div>
            <div class="yellow color" onClick={ this.handleClick }></div>
          </div>

        </section><main>

          <section id="pixel-board">
            <div class="pixel white" onClick={ this.aplicaCor }></div>
            <div class="pixel white" onClick={ this.aplicaCor }></div>
            <div class="pixel white" onClick={ this.aplicaCor }></div>
            <div class="pixel white" onClick={ this.aplicaCor }></div>
            <div class="pixel white" onClick={ this.aplicaCor }></div>

            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>

            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>

            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>

            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>
            <div class="pixel white"></div>


          </section>

        </main>
        </div>
    )
  }
}

export default projectPixelsArt;
