import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      filmes:[]
    }

    this.loadFilmes = this.loadFilmes.bind(this);
  }

  componentDidMount(){

    this.loadFilmes();
    
  }
  // Load filmes

  async loadFilmes(){
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
    
    await axios.get(url).then(res=>{
      const arrayData = res.data

      this.setState({filmes:arrayData});

    })

    

  }

  render(){
    return(
      <div>
        <h5>Pagina Home</h5>
        <div  className="container">
          {
            this.state.filmes.map((filme)=>{
              return(
                <div key={filme.id} className="ListaFilmes">
                <article >
                  <strong>{filme.nome}</strong>
                  <img src={filme.foto} alt={filme.nome }/>
                  <Link to={`/filme/${filme.id}`}>Acessar</Link>
                  
                </article>
                </div>
              )

            })
          }

        </div>

      </div>
    )
  }
}
export default Home;