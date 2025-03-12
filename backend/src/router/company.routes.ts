import { Router } from 'express';
import CompanyController from '../controller/company.controller';
const router = Router();

router.post('/', CompanyController.createCompagny);
router.get('/', CompanyController.getAllCompany);
router.get('/:id', CompanyController.getCompanyById);
router.put('/employee/new/:companyId', CompanyController.createEmployee);
router.put('/director/:companyId', CompanyController.addDirector);
router.put('/director/new/:companyId', CompanyController.createDirector);

export default router;
