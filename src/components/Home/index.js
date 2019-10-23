import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css'

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

  loadFilmes(){
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
    fetch(url)
    .then((response) =>response.json())
    .then((json)=>{   
      this.setState({filmes:json});

      console.log(json)

      

    });



    



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