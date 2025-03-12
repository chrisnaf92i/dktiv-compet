import { Request, Response } from 'express';
import prisma from '../utils/prisma';
import { Company } from '@prisma/client';
import CompanyService from '../service/company.service';
import { hash, hashSync } from 'bcryptjs';

export default class CompanyController {
    static async createCompagny(req: Request, res: Response) {
        const { name, description, logoUrl } = req.body;
        // on demande si le patron existe sinon créaiton d'un patron
        // diviser le form en 2 pour avoir une parti création de la company, la requête s'envoi puis création de la company
        try {
            const newCompany = await CompanyService.createCompany(
                name,
                description,
                logoUrl,
            );

            res.status(201).json({
                message: 'The company have successfully created',
            });
        } catch (error) {
            res.status(500).json({
                error: 'An error occured',
            });
        }
    }

    static async getCompanyById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const company = await CompanyService.getCompanyById(id);
            if (!company) {
                res.status(404).json({
                    error: 'Company not found',
                });
            } else {
                res.status(200).json(company);
            }
        } catch (error) {
            res.status(500).json({
                error: 'An error occured',
            });
        }
    }

    static async getAllCompany(_: Request, res: Response) {
        try {
            const companies = await CompanyService.getAllCompanies();
            res.status(200).json(companies);
        } catch (error) {
            res.status(500).json({
                error: 'An error occured',
            });
        }
    }

    static async createEmployee(req: Request, res: Response) {
        try {
            const { lastname, firstname, email, phone } = req.body;
            const { companyId } = req.params;
            const newEmploye = await CompanyService.addEmployeeToCompany(
                companyId,
                lastname,
                firstname,
                email,
                phone,
                hashSync('changer123'),
            );

            res.status(201).json({
                message: 'Employee successfully added',
                newEmploye,
            });
        } catch (error) {
            res.status(500).json({
                error: 'An error occured',
            });
        }
    }

    static async createDirector(req: Request, res: Response) {
        const { lastname, firstname, email, phone } = req.body;
        const { companyId } = req.params;

        try {
            const newDirector = await CompanyService.addNewDirectorToCompany(
                companyId,
                lastname,
                firstname,
                email,
                phone,
                hashSync('changer123'),
            );

            res.status(201).json({
                message: 'Employee successfully added',
                newDirector,
            });
        } catch (error) {
            res.status(500).json({
                error: 'An error occured',
            });
        }
    }

    static async addDirector(req: Request, res: Response) {
        const { directorId } = req.body;
        const { companyId } = req.params;

        try {
            const newDirector = await CompanyService.addDirectorToCompany(
                companyId,
                directorId,
            );

            res.status(201).json({
                message: 'Employee successfully added',
                newDirector,
            });
        } catch (error) {
            res.status(500).json({
                error: 'An error occured',
            });
        }
    }
}

/*
 tab bar :  
 - home 
 - profile
*/
