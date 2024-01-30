import express from 'express';
import clientsController from '../controllers/client.controller'

const router = express.Router();

router.get('/', clientsController.getClients);

router.get('/:id', clientsController.showClient);

router.put('/:id', clientsController.updateClient);

router.post('/', clientsController.createClient);

router.delete('/:id', clientsController.deleteClient);



export default router;
