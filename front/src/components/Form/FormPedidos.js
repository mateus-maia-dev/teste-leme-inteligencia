import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { ArrowBack } from "../ArrowBack";


const schema = yup.object().shape({
    produto: yup.string().required(),
    valor: yup.number().min(0).required(),
    data: yup.date().required(),
    cliente_id: yup.number().required(),
    pedido_status_id: yup.number().required(),
    ativo: yup.number().required()
});


export const FormPedidos = () => {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = async (data) => {

        const response = await fetch("http://localhost:5000/api/pedido/", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        // window.location = "/clientes";
        reset();
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitHandler)} style={formStyle}>
                <h2>Preencha o formulário</h2>
                <br />

                <input {...register("produto")} placeholder="Produto" type="text" required />
                <p>{errors.produto?.message}</p>
                <br />

                <input
                    {...register("valor")}
                    placeholder="Valor"
                    type="number"
                    required
                />
                <p>{errors.valor?.message}</p>
                <br />

                <input
                    {...register("data")}
                    placeholder="Data"
                    type="date"
                    required
                />
                <p>{errors.data?.message}</p>
                <br />

                <input
                    {...register("cliente_id")}
                    placeholder="Cliente ID"
                    type="number"
                    required
                />
                <p>{errors.cliente_id?.message}</p>
                <br />

                <input
                    {...register("pedido_status_id")}
                    placeholder="Pedido Status"
                    type="number"
                    required
                />
                <p>{errors.pedido_status_id?.message}</p>
                <br />

                <input
                    {...register("ativo")}
                    placeholder="Ativo"
                    type="number"
                    required
                />
                <p>{errors.ativo?.message}</p>
                <br />



                <input type="submit" id="submit" />
            </form>
            <ArrowBack />
        </>
    );
}




// <form onSubmit={handleSubmit(submitForm)}>
//             <input {...register("nome")} placeholder="Nome" type="text" required />
//             <p>{errors.name?.message}</p>

//             <input type="text" name="cpf" placeholder="CPF" ref={register} />
//             <p>{errors.cpf?.message}</p>

//             <input {...register("nome")} placeholder="Nome" type="text" required />
//             <p>{errors.date_birth?.message}</p>

//             <input type="tel" id="phoneNumber" name="phone" pattern="[+]{55}[0-9]{11,14}" required ref={register} />
//             <p>{errors.phoneNumber?.message}</p>

//             <input type="number" name="actives" placeholder="ativos" ref={register} />
//             <p>{errors.actives?.message}</p>

//             <input type="submit" id="submit" ref={register} />
//         </form>