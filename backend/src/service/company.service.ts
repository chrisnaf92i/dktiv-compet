import { Role } from '@prisma/client';
import prisma from '../utils/prisma';
import e from 'express';

export default class CompanyService {
    static async createCompany(
        name: string,
        description: string,
        logoUrl: string,
    ) {
        try {
            const newCompany = await prisma.company.create({
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
        } catch (error) {
            console.log(error);
            throw new Error('An error occured');
        }
    }

    static async getAllCompanies() {
        try {
            const companies = await prisma.company.findMany({
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
        } catch (error) {
            console.log(error);
            throw new Error('An error occured');
        }
    }

    static async getCompanyById(id: string) {
        try {
            const company = await prisma.company.findUnique({
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
        } catch (error) {
            console.log(error);
            throw new Error('An error occured');
        }
    }

    static async addNewDirectorToCompany(
        companyId: string,
        lastname: string,
        firstname: string,
        email: string,
        phone: string,
        password: string,
    ) {
        try {
            const newDirector = await prisma.user.create({
                data: {
                    lastname,
                    firstname,
                    email,
                    phone,
                    password,
                    role: Role.presta,
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
        } catch (error) {
            console.log(error);
            throw new Error('An error occured');
        }
    }

    static async addDirectorToCompany(companyId: string, directorId: string) {
        try {
            const updatedCompany = await prisma.company.update({
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
        } catch (error) {
            console.error(error);
            throw new Error('An error occured');
        }
    }

    static async addEmployeeToCompany(
        companyId: string,
        lastname: string,
        firstname: string,
        email: string,
        phone: string,
        password: string,
    ) {
        try {
            const newEmploye = await prisma.user.create({
                data: {
                    lastname,
                    firstname,
                    email,
                    phone,
                    password,
                    role: Role.presta,
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
        } catch (error) {
            console.log(error);
            throw new Error('An error occured');
        }
    }
}
