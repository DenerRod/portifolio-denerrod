import React from 'react';
import img from '../images/loveIMG.jpg'


class amor extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
          texto: '',
          texto2: '',
          imgLove: '',
        }
      };

    handleClick = () => {
        this.setState({ 
            texto: 'TE AMO MEU AMOR !',
            texto2: 'Pra sempre ❤',
            imgLove: img
        })
    }
    render() {
        const { texto } = this.state;
        const { texto2 } = this.state;
        const { imgLove } = this.state;
    return (
        <div className="home-love">
            <header id="btnLove">
                <button onClick={this.handleClick}>Clique</button>
                <h1 id="loveText">{ texto }</h1>
                <h1 id="loveText">{ texto2 }</h1>
                <img src={imgLove} alt="" />
            </header>
        </div>
    );
  };
};

export default amor;