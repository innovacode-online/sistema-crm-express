import express from 'express';
import companiesController from '../controllers/company.controller'

const router = express.Router();

router.get('/', companiesController.getAllCompanies);

router.get('/:id', companiesController.getCompanyById);

router.post('/', companiesController.createNewCompany);

router.delete('/:id', companiesController.deleteCompanyById);



export default router;
