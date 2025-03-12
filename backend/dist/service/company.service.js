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
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../utils/prisma"));
class CompanyService {
    static createCompany(name, description, logoUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCompany = yield prisma_1.default.company.create({
                    data: {
                        name,
                        description,
                        logoUrl,
                    },
                    select: {
                        name: true,
                        description: true,
                        logoUrl: true,
                        director: {
                            select: {
                                lastname: true,
                                firstname: true,
                                email: true,
                                phone: true,
                            },
                        },
                    },
                });
                return newCompany;
            }
            catch (error) {
                console.log(error);
                throw new Error('An error occured');
            }
        });
    }
    static getAllCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield prisma_1.default.company.findMany({
                    select: {
                        name: true,
                        description: true,
                        logoUrl: true,
                        director: {
                            select: {
                                lastname: true,
                                firstname: true,
                                email: true,
                                phone: true,
                            },
                        },
                    },
                });
                return companies;
            }
            catch (error) {
                console.log(error);
                throw new Error('An error occured');
            }
        });
    }
    static getCompanyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield prisma_1.default.company.findUnique({
                    where: { id },
                    select: {
                        name: true,
                        description: true,
                        logoUrl: true,
                        director: {
                            select: {
                                lastname: true,
                                firstname: true,
                                email: true,
                                phone: true,
                            },
                        },
                    },
                });
                return company;
            }
            catch (error) {
                console.log(error);
                throw new Error('An error occured');
            }
        });
    }
    static addNewDirectorToCompany(companyId, lastname, firstname, email, phone, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newDirector = yield prisma_1.default.user.create({
                    data: {
                        lastname,
                        firstname,
                        email,
                        phone,
                        password,
                        role: client_1.Role.presta,
                        directedCompagny: {
                            connect: {
                                id: companyId,
                            },
                        },
                    },
                    select: {
                        lastname: true,
                        firstname: true,
                        email: true,
                        phone: true,
                        directedCompagny: {
                            select: {
                                name: true,
                                description: true,
                                logoUrl: true,
                            },
                        },
                    },
                });
                return newDirector;
            }
            catch (error) {
                console.log(error);
                throw new Error('An error occured');
            }
        });
    }
    static addDirectorToCompany(companyId, directorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCompany = yield prisma_1.default.company.update({
                    where: {
                        id: companyId,
                    },
                    data: {
                        director: {
                            connect: {
                                id: directorId,
                            },
                        },
                    },
                    select: {
                        name: true,
                        description: true,
                        logoUrl: true,
                        director: {
                            select: {
                                lastname: true,
                                firstname: true,
                                email: true,
                                phone: true,
                            },
                        },
                    },
                });
                return updatedCompany;
            }
            catch (error) {
                console.error(error);
                throw new Error('An error occured');
            }
        });
    }
    static addEmployeeToCompany(companyId, lastname, firstname, email, phone, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmploye = yield prisma_1.default.user.create({
                    data: {
                        lastname,
                        firstname,
                        email,
                        phone,
                        password,
                        role: client_1.Role.presta,
                        employeOf: {
                            connect: {
                                id: companyId,
                            },
                        },
                    },
                    select: {
                        lastname: true,
                        firstname: true,
                        email: true,
                        phone: true,
                        directedCompagny: {
                            select: {
                                name: true,
                                description: true,
                                logoUrl: true,
                            },
                        },
                    },
                });
                return newEmploye;
            }
            catch (error) {
                console.log(error);
                throw new Error('An error occured');
            }
        });
    }
}
exports.default = CompanyService;
