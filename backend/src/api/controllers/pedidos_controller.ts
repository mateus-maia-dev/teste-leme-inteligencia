import { Request, Response } from 'express';
import { Pedidos } from "../../entities";

import { getRepository } from "typeorm";


// criação de um Pedido
exports.create = async (req: Request, res: Response) => {

    const pedidoRepository = getRepository(Pedidos);

    const pedido = new Pedidos();
    pedido.produto = req.body.produto;
    pedido.valor = req.body.valor;
    pedido.data = req.body.data;
    pedido.cliente_id = req.body.cliente_id;
    pedido.pedido_status_id = req.body.pedido_status_id;
    pedido.ativo = req.body.ativo;

    const createdPedido = await pedidoRepository.save(pedido);


    res.status(201).json({
        status: "sucess",
        pedido: createdPedido
    });
};


// Listar todos os pedidos
exports.list = async (req: Request, res: Response) => {
    const pedidoRepository = getRepository(Pedidos);
    const pedido: Array<Pedidos> = await pedidoRepository.find({});

    res.status(200).json({
        status: "sucess",
        pedidos: pedido
    });
};

// Recupera um Pedido
exports.retrieve = async (req: Request, res: Response) => {
    const pedidoRepository = getRepository(Pedidos);

    const pedido: Pedidos = await pedidoRepository.findOne(req.params.id)

    if (!pedido) {
        res.status(404).json({
            status: "erro",
            msg: "pedido não encontrado"
        })
    }
    res.status(200).json({
        status: "sucess",
        pedido: pedido
    });
}

// Atualiza um pedido
exports.update = async (req: Request, res: Response) => {
    const pedidoRepository = getRepository(Pedidos);

    // vai retornar uma promisse
    const pedido: Pedidos | undefined = await pedidoRepository.findOne(req.params.id);

    if (pedido === undefined) {
        return res.status(404).json({
            status: 'erro',
            msg: "pedido não existe."
        });
    }


    pedido.produto = req.body.produto;
    pedido.valor = req.body.valor;
    pedido.data = req.body.data;
    pedido.cliente_id = req.body.cliente_id;
    pedido.pedido_status_id = req.body.pedido_status_id;
    pedido.ativo = req.body.ativo;


    const updatedPedido = await pedidoRepository.save(pedido)

    res.status(200).json({
        status: 'sucess',
        pedido: updatedPedido
    })
}

// Deleta um pedido
exports.destroy = async (req: Request, res: Response) => {
    const pedidoRepository = getRepository(Pedidos);

    const pedido: Pedidos | undefined = await pedidoRepository.findOne(req.params.id)

    if (!pedido) {
        res.status(404).json({
            status: "erro",
            msg: "pedido não encontrado"
        })
    }

    await pedidoRepository.delete(pedido)

    res.send(204)
}
