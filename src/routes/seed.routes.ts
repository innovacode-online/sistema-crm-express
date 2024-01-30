import express from 'express';
import seedController from '../controllers/seed.controller'

const router = express.Router();

router.get('/', seedController.seedDatabase);



export default router;
