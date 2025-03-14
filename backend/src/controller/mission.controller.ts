import { Request, Response } from 'express';
import MissionService from '../service/mission.service';

export default class MissionController {
    static async getMission(req: Request, res: Response) {
        try {
            const missions = await MissionService.getMissions();
            res.status(200).json({ missions });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async getMissionById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const mission = await MissionService.getMissionById(id);
            res.status(200).json({ mission });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    static async createMission(req: Request, res: Response) {
        const {
            name,
            description,
            dateStart,
            dateEnd,
            category,
            companyId,
            managerId,
            theme,
            location,
        } = req.body;
        try {
            const newMission = await MissionService.createMission(
                name,
                description,
                dateStart,
                dateEnd,
                category,
                companyId,
                managerId,
                theme,
                location,
            );
            res.status(201).json({ newMission });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}
