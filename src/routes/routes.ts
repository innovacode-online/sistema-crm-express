import express from 'express';
import CompanyRoutes from '../routes/company.routes'
import ClientRoutes from '../routes/client.routes'

const router = express.Router();

router.use('/companies', CompanyRoutes);
router.use('/clients', ClientRoutes);


export default router;