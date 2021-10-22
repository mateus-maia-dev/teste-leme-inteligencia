import './App.css';
import React, { Fragment } from "react";

import { Home } from './pages/Home'
import { Clientes } from './pages/Clientes';
import { Pedidos } from './pages/Pedidos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListaClientes } from './components/Clientes/ListaClientes';
import { ListaPedidos } from './components/Pedidos/ListaPedidos';
import { FormCliente } from './components/Form/FormCliente';
import { FormPedidos } from './components/Form/FormPedidos';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/clientesList' component={ListaClientes} />
          <Route path='/pedidosList' component={ListaPedidos} />
          <Route path='/clientesReg' component={FormCliente} />
          <Route path='/pedidosReg' component={FormPedidos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
