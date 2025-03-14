import prisma from '../utils/prisma';

export default class MissionService {
    static async getMissions() {
        try {
            const missions = await prisma.mission.findMany();
            return missions;
        } catch (error) {
            console.error(error);
        }
    }
    static async getMissionById(id: string) {
        try {
            const mission = await prisma.mission.findUnique({
                where: {
                    id,
                },
            });
            return mission;
        } catch (error) {
            console.error(error);
        }
    }
    static async createMission(
        name: string,
        description: string,
        dateStart: Date,
        dateEnd: Date,
        category: string,
        companyId: string,
        managerId: string,
        theme: string,
        location: string,
    ) {
        try {
            const mission = await prisma.mission.create({
                data: {
                    name,
                    description,
                    dateStart,
                    dateEnd,
                    company: {
                        connect: {
                            id: companyId,
                        },
                    },
                    manager: {
                        connect: {
                            id: managerId,
                        },
                    },
                    category,
                    theme,
                    location,
                },
                select: {
                    name: true,
                    description: true,
                    dateStart: true,
                    dateEnd: true,
                    category: true,
                    theme: true,
                    location: true,
                    company: {
                        select: {
                            name: true,
                            description: true,
                        },
                    },
                },
            });
            return mission;
        } catch (error) {
            console.error(error);
        }
    }
}
