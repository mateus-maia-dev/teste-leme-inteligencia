import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { ArrowBack } from "../ArrowBack";


const phoneRegExp = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/
const cpfRegExp = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
const today = new Date();

const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    cpf: yup.string().matches(cpfRegExp, 'CPF inválido').required("Campo obrigatório"),
    data_nasc: yup.string().required("Campo obrigatório"),
    telefone: yup.string().matches(phoneRegExp, 'Telefone inválido'),
    ativo: yup.number().min(0, "numero negativo não permitido").required("Campo obrigatório")
});


export const FormCliente = () => {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = async (data) => {
        console.log(data)
        const response = await fetch("http://localhost:5000/api/cliente", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        console.log(response)
        // window.location = "/";
        reset();
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitHandler)} style={formStyle}>
                <h2>Preencha o formulário</h2>
                <br />

                <input {...register("nome")} placeholder="Nome" type="string" required />
                {errors &&
                    <p>{errors.nome?.message}</p>
                }

                <br />

                <input
                    {...register("cpf")}
                    placeholder="CPF"
                    type="string"
                    required
                />
                <p>{errors.cpf?.message}</p>
                <br />

                <input
                    {...register("data_nasc")}
                    placeholder="Data de Nascimento"
                    type="string"
                    required
                />
                <p>{errors.data_nasc?.message}</p>
                <br />

                <input
                    {...register("telefone")}
                    placeholder="Telefone"
                    type="string"
                />
                <p>{errors.telefone?.message}</p>
                <br />

                <input
                    {...register("ativo")}
                    placeholder="Ativos"
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

