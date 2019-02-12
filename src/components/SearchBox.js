import React from 'react';

const SearchBox = ({searchfield,SearchChange}) => {
return(
	<div>
   <input type='search'  placeholder='Busca un Pokemon' className='pa3 ba3 b--blue bg-lightest-blue' onChange={SearchChange} />
   </div>
);
}

export default SearchBox;