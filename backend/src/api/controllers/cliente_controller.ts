import { Request, Response } from 'express';
import { Clientes } from "../../entities";

import { getRepository } from "typeorm";


// criação Cliente
exports.create = async (req: Request, res: Response) => {
    const clientRepository = getRepository(Clientes);

    const client = new Clientes();
    client.nome = req.body.nome;
    client.cpf = req.body.cpf;
    client.data_nasc = req.body.data_nasc;
    client.telefone = req.body.telefone;
    client.ativo = req.body.ativo;

    const createdClient = await clientRepository.save(client);

    res.status(201).json({
        status: "sucess",
        cliente: createdClient
    });
};

// Listar Todos os Clientes
exports.list = async (req: Request, res: Response) => {
    const clientRepository = getRepository(Clientes);
    const client: Array<Clientes> = await clientRepository.find({});

    res.status(200).json({
        status: "sucess",
        clientes: client
    });
};

// Recuperar apenas um cliente baseado no seu ID
exports.retrieve = async (req: Request, res: Response) => {
    const clientRepository = getRepository(Clientes);

    const client: Clientes = await clientRepository.findOne(req.params.id)

    if (!client) {
        res.status(404).json({
            status: "erro",
            msg: "Cliente não encontrado"
        })
    }
    res.status(200).json({
        status: "sucess",
        cliente: client
    });
}

// Atualizar dados de um cliente. Obs: É necessário fornecer todos os campos
exports.update = async (req: Request, res: Response) => {
    const clientRepository = getRepository(Clientes);

    // vai retornar uma promisse
    const client: Clientes | undefined = await clientRepository.findOne(req.params.id);

    if (client === undefined) {
        return res.status(404).json({
            status: 'erro',
            msg: "cliente não existe."
        });
    }

    client.nome = req.body.nome;
    client.cpf = req.body.cpf;
    client.data_nasc = req.body.data_nasc;
    client.telefone = req.body.telefone;
    client.ativo = req.body.ativo;


    const updatedClient = await clientRepository.save(client)
    // await animalRepository.update(animal.id, { name: req.body.name, age: req.body.age, weight: req.body.weight, sex: req.body.sex, group: animal.group, characteristics: animal.characteristics })

    // const response: Animal | undefined = await animalRepository.findOne(req.params.animal_id);

    res.status(200).json({
        status: 'sucess',
        cliente: updatedClient
    })
}

// Deletar um Cliente
exports.destroy = async (req: Request, res: Response) => {
    const clientRepository = getRepository(Clientes);

    const client: Clientes | undefined = await clientRepository.findOne(req.params.id)

    if (!client) {
        res.status(404).json({
            status: "erro",
            msg: "Cliente não encontrado"
        })
    }

    await clientRepository.delete(client)

    res.send(204)
}
