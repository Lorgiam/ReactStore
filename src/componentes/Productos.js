import React, {Component} from "react";
import Producto from "./Producto";
import Buscador from "./Buscador";

class Productos extends Component {
  render() {
    const productos = this.props.productos;
    return (
      <div className='productos'>
        <h2>Nuestros Productos</h2>
        <Buscador busquedaProducto={this.props.busquedaProducto} />
        <ul className='lista-productos'>
          {Object.keys(productos).map(key => (
            <li>
              <Producto key={key} producto={productos[key]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Productos;
