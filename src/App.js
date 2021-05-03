import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ListarProductos from "./components/ListarProductos";
import AgregarProductos from "./components/AgregarProductos";
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/lista-de-productos">
          <ListarProductos />
        </Route>
        <Route exact path="/agregar-productos">
          <AgregarProductos />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
