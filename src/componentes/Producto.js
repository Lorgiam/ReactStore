import React, {Component} from "react";
import "../css/Productos.css";
import {Link} from "react-router-dom";

class Producto extends Component {
  render() {
    const {imagen, nombre, precio, id} = this.props.producto;
    return (
      <div>
        <img src={`/img/${imagen}.png`} alt={nombre} />
        <p>
          {nombre} <span> $ {precio}</span>
        </p>
        <Link to={`/producto/${id}`}>Más Informacion</Link>
      </div>
    );
  }
}

export default Producto;
