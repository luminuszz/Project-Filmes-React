import React, { Component } from "react";
import './index.css'
class Filme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: []
    };
    this.carregaFilme = this.carregaFilme.bind(this);
  }

  componentDidMount() {
    this.carregaFilme();
  }

  carregaFilme() {
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
      .then(r => r.json())
      .then(json => {
        this.setState({ filme: json });
        console.log(json);
      });
  }

  render() {
    let state = this.state.filme;
    return (
      <div key={state.id} className='container'>
        <article className='filmeUnico'>
        <h1>{state.nome}</h1>
        <img src={state.foto} alt={state.nome} />
        {state.length !== 0 && <h3>Sinpose</h3>}
        <p>{state.sinopse}</p>

        
        </article>
      </div>
    );
  }
}
export default Filme;
