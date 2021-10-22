import React, { Fragment, useEffect, useState } from 'react'
import { DeleteButton } from '../DeleteButton';

import { ArrowBack } from '../ArrowBack'

export const ListaClientes = () => {


    const [clients, setClients] = useState([]);

    // deletar um cliente
    const deleteClient = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/cliente/${id}`, {
                method: "DELETE"
            });

            setClients(clients.filter(client => client.id !== id));

        } catch (error) {
            console.error(error.message);
        }
    }

    // listar todos clientes
    const getClients = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/cliente/")

            const jsonData = await response.json();

            setClients(jsonData.clientes);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getClients();
    }, [])

    return (
        <Fragment class="container">
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data_Nasc</th>
                        <th>Telefone</th>
                        <th>Ativo</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td >{client.nome}</td>
                            <td >{client.cpf}</td>
                            <td >{client.data_nasc}</td>
                            <td >{client.telefone}</td>
                            <td >{client.ativo}</td>
                            <td >
                                <button className="btn btn-danger" onClick={() => deleteClient(client.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ArrowBack />

        </Fragment>
    )
}
