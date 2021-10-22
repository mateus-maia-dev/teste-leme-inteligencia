import { Request, response, Response, Router } from 'express';
import { PedidosImagens, Pedidos } from "../../entities";

import { getRepository } from "typeorm";
import { multerConfig } from '../../config/multer'

import multer from 'multer';


const router = Router();

export default () => {

    router
        .post("/", multer(multerConfig).single('imagem'), async (req: Request, res: Response) => {
            try {
                const clientRepository = getRepository(PedidosImagens);

                const newPedidoImg = new PedidosImagens();
                newPedidoImg.pedido_id = req.body.pedido_id;
                newPedidoImg.imagem = req.file.path;
                newPedidoImg.capa = req.file.path;

                const createdPedidoImg = await clientRepository.save(newPedidoImg);

                console.log(createdPedidoImg);

                res.status(201).json({
                    status: "sucess",
                    pedido: {
                        id: createdPedidoImg.id,
                        pedido_id: createdPedidoImg.pedido_id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/api/upload" + createdPedidoImg.id
                        }


                    }
                });
            } catch (error) {
                console.error(error.message);
            }

        })
    return router;
}



// module.exports = router;