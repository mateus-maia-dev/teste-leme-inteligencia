import React, { Fragment, useEffect, useState } from 'react'
import { EditButton } from '../EditButton'
import { DeleteButton } from '../DeleteButton';

import { CSVLink } from "react-csv";
import { ArrowBack } from '../ArrowBack';




export const ListaPedidos = () => {

    const linkStyle = {
        textDecoration: "none",
    }

    const [pedidos, setPedidos] = useState([]);
    console.log(pedidos)
    // deletar um pedido
    const deletePedido = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/pedido/${id}`, {
                method: "DELETE"
            });

            setPedidos(pedidos.filter(pedido => pedido.id !== id));

        } catch (error) {
            console.error(error.message);
        }
    }

    // listar todos pedidos
    const getPedidos = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/pedido/")

            const jsonData = await response.json();

            setPedidos(jsonData.pedidos);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getPedidos();
    }, [])

    // Exportar para CSV
    const headers = [
        { label: 'Produto', key: 'produto' },
        { label: 'Valor', key: 'valor' },
        { label: 'Data Pedido', key: 'data_pedido' },
        { label: 'Cliente', key: 'cliente_id' },
        { label: 'Status', key: 'pedido_status_id' },
        { label: 'Ativo', key: 'ativo' },
    ];

    const csvReport = {
        filename: 'PedidosLeme.csv',
        headers: headers,
        data: pedidos
    }

    return (
        <div class="container pt-5">
            <button type="button" class="btn btn-outline-success">
                <CSVLink {...csvReport} style={linkStyle}>
                    Exportar para CSV
                </CSVLink>
            </button>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Data Pedido</th>
                        <th>Cliente ID</th>
                        <th>Status</th>
                        <th>Ativo</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido => (
                        <tr key={pedido.id}>
                            <td >{pedido.produto}</td>
                            <td >{pedido.valor}</td>
                            <td >{pedido.data}</td>
                            <td >{pedido.cliente_id}</td>
                            <td >{pedido.pedido_status_id}</td>
                            <td>{pedido.ativo}</td>
                            <td >
                                <button className="btn btn-danger" onClick={() => deletePedido(pedido.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ArrowBack />
        </div>
    )
}
