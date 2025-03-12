import { Router } from 'express';
import CompanyController from '../controller/company.controller';
const router = Router();

router.post('/', CompanyController.createCompagny);
router.post('/:id', CompanyController.getCompanyById);

export default router;
