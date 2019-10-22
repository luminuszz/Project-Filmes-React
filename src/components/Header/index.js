import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='header'>
       <Link to='/'>Locadora Pica das Galáxias</Link>
      </div>
    )
  }
}
export default Header;