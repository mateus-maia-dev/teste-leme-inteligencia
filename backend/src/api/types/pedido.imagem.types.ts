import { PedidoInterface } from "./pedidos.types";


export interface PedidoImagemInterface {
    id: number;
    pedido_id: PedidoInterface;
    imagem: string;
    capa: string;
}