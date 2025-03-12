import prisma from '../utils/prisma';

export default class CompanyService {
    static async createCompany(name: string, directorId: string) {
        try {
            const newCompany = await prisma.company.create({
                data: {
                    name,
                    directorId,
                },
            });

            return newCompany;
        } catch (error) {
            throw new Error('An error occured');
        }
    }

    static async getCompanyById(id: string) {
        try {
            const company = await prisma.company.findUnique({
                where: { id },
            });

            return company;
        } catch (error) {
            throw new Error('An error occured');
        }
    }
}
