import express from 'express';
import CompanyRoutes from '../routes/company.routes'

const router = express.Router();

router.use('/companies', CompanyRoutes);


export default router;