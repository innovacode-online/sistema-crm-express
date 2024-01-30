import express from 'express';
import CompanyRoutes from '../routes/company.routes'
import ClientRoutes from '../routes/client.routes'
import SeedRoute from '../routes/seed.routes'

const router = express.Router();

router.use('/companies', CompanyRoutes);
router.use('/clients', ClientRoutes);
router.use('/seed', SeedRoute);


export default router;