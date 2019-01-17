import React from 'react';
import "../css/Contacto.css"

const Contacto = () => {
    return (
       <form action="">
           <legend>Formulario de contacto</legend>
           <div className="input-field">
               <label>Nombre: </label>
               <input placeholder="Tu nombre" type="text" name="" id=""/>
           </div>
           <div className="input-field">
               <label>Email: </label>
               <input placeholder="Tu Email" type="email" name="" id=""/>
           </div>
           <div className="input-field">
               <label>Mensaje: </label>
               <textarea name="" id="" cols="30" rows="10"></textarea>
           </div>
           <div className="input-field enviar">
               <input type="submit" value="Enviar"/>
           </div>
       </form>
    );
};

export default Contacto;