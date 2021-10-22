import { Express } from "express";
import PedidoRouter from './pedido.router';
import ClientRouter from './client.router'
import ProductImageRouter from './img.router'



export default (app: Express) => {

    const pedidoRouter = PedidoRouter();
    const clientRouter = ClientRouter();
    const imgRouter = ProductImageRouter();

    // Routes
    app.use('/api/cliente', clientRouter);
    app.use('/api/pedido', pedidoRouter);
    app.use('/api/upload', imgRouter);
}
