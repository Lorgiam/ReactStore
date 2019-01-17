import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nosotros from "./Nosotros";
import Productos from "./Productos";
import infoProductos from "../Datos/datos.json";
import Header from "./Header";
import SingleProducto from "./SingleProducto";
import ScrollToTop from "./ScrollToTop";
import Navegacion from "./Navegacion";
import Error from "./Error";
import Contacto from "./Contacto";

class Router extends Component {
  state = {
    productos: {}
  };
  componentWillMount() {
    this.setState({
      productos: infoProductos,
      terminoBusqueda: ""
    });
  }
  busquedaProducto = termino => {
    if (termino.length > 3) {
      this.setState({
        terminoBusqueda: termino
      });
    } else {
      this.setState({
        terminoBusqueda: ""
      });
    }
  };

  render() {
    let productos = [...this.state.productos];
    let busqueda = this.state.terminoBusqueda;
    let resultado;
    if (busqueda) {
      resultado = productos.filter(producto =>
        producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase())!== -1
      );
    } else {
      resultado = productos;
    }
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Navegacion />
          <ScrollToTop>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Productos busquedaProducto={this.busquedaProducto} productos={resultado} />
                )}
              />
              <Route path='/nosotros' component={Nosotros} />
              <Route
                path='/productos'
                render={() => (
                  <Productos busquedaProducto={this.busquedaProducto} productos={resultado} />
                )}
              />
              <Route path='/contacto' component={Contacto} />
              <Route
                path='/producto/:productoId'
                render={props => {
                  let idProducto = props.location.pathname.replace("/producto/", "");
                  return <SingleProducto producto={this.state.productos[idProducto]} />;
                }}
              />
              <Route component={Error} />
            </Switch>
          </ScrollToTop>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
