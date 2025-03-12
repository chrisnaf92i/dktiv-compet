import { Request, Response } from 'express';
import prisma from '../utils/prisma';
import { Company } from '@prisma/client';
import CompanyService from '../service/company.service';

export default class CompanyController {
    static async createCompagny(req: Request, res: Response) {
        const { name, directorId } = req.body;
        try {
            const newCompany = await CompanyService.createCompany(
                name,
                directorId,
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
}
