import React from 'react';
import Cardcss from './Card.css'
import 'tachyons';



const Card =(props)=>{

	  

	   	 
            
            if (props.type2.length ===0) {
              return(
                 <div className={`tc dib grow shadow-5 ma3 pa3 br2 ` + props.clase} >
                <div >
                <img className='CardPhoto br3' alt='pokemon' src={props.photo}/>
                </div>
                <div >
                <h3 className='divinfo'>{props.name}</h3>
                <div id='types '  >
                <p className='divtype'>Tipo: <img alt='type' className='phototype' src={props.type} /></p>
                <p className='divtype'>Debilidad: <img alt='type' className='phototype' src={props.type} /></p>
                <p className='number'>{props.num}</p>
                </div>
               </div>         
          </div>
       );  
            }else{
             return(
             <div className={`tc dib grow pa3 shadow-5 ma3  br2 ` + props.clase} >
                <div >
                <img className='CardPhoto br3' alt='pokemon' src={props.photo}/>
                </div>
                <div >
                <h3 className='divinfo'>{props.name}</h3>
                <div id='types '  >
                <p className='divtype'>Tipo:<img alt='type' className='phototype' src={props.type} />
                <img className='phototype' alt='type' src={props.type2} /></p>
                <p className='divtype'>Debilidad:<img alt='type' className='phototype' src={props.type} />
                <img className='phototype' alt='type' src={props.type2} /></p>
                <p className='number'>{props.num}</p>
                </div>
                
               </div>         
            
             </div>

             );
           }
	   	 	}


export default Card;

