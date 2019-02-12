import React from 'react';

import Card from './Card';
const CardList = ({pokes})=>{


	const CardArray = pokes.map((poke,i)=>{
	 return (<Card key={i} num={pokes[i].number} name={pokes[i].name} id={i} photo={pokes[i].photo} type={pokes[i].type} type2={pokes[i].type2} clase={pokes[i].clase}/>);
	})

    return(
         <div>
         {CardArray}
         </div>
    	);
    

}
export default CardList;