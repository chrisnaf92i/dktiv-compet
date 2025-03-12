"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = __importDefault(require("../controller/company.controller"));
const router = (0, express_1.Router)();
router.post('/', company_controller_1.default.createCompagny);
router.get('/', company_controller_1.default.getAllCompany);
router.get('/:id', company_controller_1.default.getCompanyById);
router.put('/employee/new/:companyId', company_controller_1.default.createEmployee);
router.put('/director/:companyId', company_controller_1.default.addDirector);
router.put('/director/new/:companyId', company_controller_1.default.createDirector);
exports.default = router;
