import React from 'react'
import { Link } from 'react-router-dom';



export const Home = () => {
    return (

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a class="navbar-brand" href="#">Leme</a>
            <ul class="navbar-nav d-flex justify-content-around w-75">
                <Link to={'/clientesList'}>
                    <li class="nav-item mr-5">
                        Visualizar Clientes
                    </li>
                </Link>
                <Link to={'/pedidosList'}>
                    <li class="nav-item">
                        Visualizar Pedidos
                    </li>
                </Link>
                <Link to={'/clientesReg'}>
                    <li class="nav-item">
                        Cadastrar Cliente
                    </li>
                </Link>
                <Link to={'/pedidosReg'}>
                    <li class="nav-item">
                        Cadastrar Pedido
                    </li>
                </Link>
            </ul>
        </nav>

    )
}
