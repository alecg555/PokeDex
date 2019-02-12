import React from 'react';
import 'tachyons';

let NameSeted  = "";

const DatosIniciales =(props)=>{
    console.log(props);
if(props.tipo == 0){
 return  MostrarUsuario(props.Usuario,props.UpdateUsuario);
}
return MostrarUsuario(props.Usuario,props.UpdateUsuario);
}


function setNamelocal(event){
    NameSeted = event.target.value;
    console.log(NameSeted)
}

function MostrarUsuario (Nombre,prop){
    const Div = <div>
    <label>Por favor ingrese el nombre el usuario {`${Nombre}`}</label>
        <input type="text"  onChange={setNamelocal}  />
        <button onClick={prop} value={parseInt( Nombre) + parseInt(1)} data-id={NameSeted}  >Aceptar</button>
    </div>;
  return  (Div)
}

export default DatosIniciales;

