import React, {Component} from "react";
import "../css/Nosotros.css";

class Nosotros extends Component {
  render() {
    return (
      <div className='contenedor-nosotros'>
        <div className='imagen'>
          <img src={`/img/camisa_1.png`} alt='imagen nosotros' srcset='' />
        </div>
        <div className='contenido'>
          <h2>Sobre Nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat doloremque laboriosam
            quod corrupti voluptate at quos? Quibusdam dolorem qui, molestiae ea ullam iure
            similique modi in repellat, odit dolor illum.
          </p>
        </div>
      </div>
    );
  }
}

export default Nosotros;
