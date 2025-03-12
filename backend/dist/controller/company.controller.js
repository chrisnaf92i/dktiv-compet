"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_service_1 = __importDefault(require("../service/company.service"));
const bcryptjs_1 = require("bcryptjs");
class CompanyController {
    static createCompagny(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, logoUrl } = req.body;
            // on demande si le patron existe sinon créaiton d'un patron
            // diviser le form en 2 pour avoir une parti création de la company, la requête s'envoi puis création de la company
            try {
                const newCompany = yield company_service_1.default.createCompany(name, description, logoUrl);
                res.status(201).json({
                    message: 'The company have successfully created',
                });
            }
            catch (error) {
                res.status(500).json({
                    error: 'An error occured',
                });
            }
        });
    }
    static getCompanyById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const company = yield company_service_1.default.getCompanyById(id);
                if (!company) {
                    res.status(404).json({
                        error: 'Company not found',
                    });
                }
                else {
                    res.status(200).json(company);
                }
            }
            catch (error) {
                res.status(500).json({
                    error: 'An error occured',
                });
            }
        });
    }
    static getAllCompany(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield company_service_1.default.getAllCompanies();
                res.status(200).json(companies);
            }
            catch (error) {
                res.status(500).json({
                    error: 'An error occured',
                });
            }
        });
    }
    static createEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { lastname, firstname, email, phone } = req.body;
                const { companyId } = req.params;
                const newEmploye = yield company_service_1.default.addEmployeeToCompany(companyId, lastname, firstname, email, phone, (0, bcryptjs_1.hashSync)('changer123'));
                res.status(201).json({
                    message: 'Employee successfully added',
                    newEmploye,
                });
            }
            catch (error) {
                res.status(500).json({
                    error: 'An error occured',
                });
            }
        });
    }
    static createDirector(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { lastname, firstname, email, phone } = req.body;
            const { companyId } = req.params;
            try {
                const newDirector = yield company_service_1.default.addNewDirectorToCompany(companyId, lastname, firstname, email, phone, (0, bcryptjs_1.hashSync)('changer123'));
                res.status(201).json({
                    message: 'Employee successfully added',
                    newDirector,
                });
            }
            catch (error) {
                res.status(500).json({
                    error: 'An error occured',
                });
            }
        });
    }
    static addDirector(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { directorId } = req.body;
            const { companyId } = req.params;
            try {
                const newDirector = yield company_service_1.default.addDirectorToCompany(companyId, directorId);
                res.status(201).json({
                    message: 'Employee successfully added',
                    newDirector,
                });
            }
            catch (error) {
                res.status(500).json({
                    error: 'An error occured',
                });
            }
        });
    }
}
exports.default = CompanyController;
/*
 tab bar :
 - home
 - profile
*/
