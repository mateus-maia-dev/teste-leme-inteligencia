const { create, list, destroy, update, retrieve } = require('../controllers/pedidos_controller');

import { Router } from 'express';


const router = Router();

export default () => {

    router
        .route('/')
        .get(list)
        .post(create)

    router
        .route('/:id')
        .get(retrieve)
        .put(update)
        .delete(destroy)

    return router;

}
