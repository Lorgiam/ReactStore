import React, {Component} from "react";
import "../css/Buscador.css";

class Buscador extends Component {
  leerDatos = e => {
    //termino de busqueda
    const termino = e.target.value;

    //enviamos por props
    this.props.busquedaProducto(termino)
  };
  render() {
    return (
      <div>
        <form className='buscador'>
          <input type='text' name='' placeholder='Búsqueda' id='' onChange={this.leerDatos} />
        </form>
      </div>
    );
  }
}

export default Buscador;
