import React, { Component } from "react";
import axios from 'axios';
import './index.css'
import api from '../../services/api';
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

    axios.get(url).then(res =>{
    const arrayData = res.data;
    console.log(arrayData);

    this.setState({filme:arrayData});



    })
    
    
    
    
    
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
