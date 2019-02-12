import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from  '../components/SearchBox.js';
import { pokes } from './pokemons.js';
import Appcss from './App.css';
import DatosIniciales from '../components/DatosIniciales.js';
let Status = 0;
class App extends Component {
 

    constructor(){
    	super();
    	this.state = {

    		pokemons : pokes,
        searchfield : '',
        Usuario :1,
        Status : 0
    	}
    }


 onSetNanme=(PUsuario) =>{
   const data  = PUsuario.target.value
   if(data == 3){
    Status =1;
   }

  this.setState({Usuario : data ,Status : Status });
  console.log(PUsuario.target.getAttribute("data-id"))
 }




  onSeaChange= (event) =>{
   this.setState({searchfield:event.target.value});
  }


    render(){
      const filteredpokemons = this.state.pokemons.filter(pokes=>{
        return pokes.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

      });
      if (this.state.Status ==0) {
        return(<DatosIniciales UpdateUsuario={this.onSetNanme}  tipo={this.state.Status} Usuario={this.state.Usuario} ></DatosIniciales>);
      }
                  if (this.state.Status == 1) {
                    return (        <div className='tc'>
                        <h1>PokeDex</h1>
                        <SearchBox SearchChange={this.onSeaChange}/>
                     <CardList pokes={filteredpokemons}/>
                    
                  
                </div>);
                  }
            } 
      
   

}

export default App;