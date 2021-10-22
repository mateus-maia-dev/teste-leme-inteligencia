import { ClienteInterface } from "./clientes.types";
import { PedidoStatusInterface } from "./pedido.status.types";

export interface PedidoInterface {
    id: number;
    produto: string;
    valor: number;
    data: Date;
    cliente_id: ClienteInterface;
    pedido_status_id: PedidoStatusInterface;
    ativo: number;
}
