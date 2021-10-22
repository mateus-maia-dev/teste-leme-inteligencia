import { Router } from 'express';
const { create, list, destroy, update, retrieve } = require('../controllers/cliente_controller');
import { clientValidator, validate } from '../middlewares/client.validator';

const router = Router();

export default () => {

    router
        .route('/')
        .get(list)
        .post(clientValidator(), validate, create)

    router
        .route('/:id')
        .get(retrieve)
        .put(update)
        .delete(destroy)

    return router;

}
