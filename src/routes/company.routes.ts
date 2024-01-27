import express from 'express';
import companiesController from '../controllers/company.controller'

const router = express.Router();

router.get('/', companiesController.getAllCompanies);



export default router;
