import { Router } from 'express';
import MissionController from '../controller/mission.controller';
const router = Router();

router.get('/', MissionController.getMission);
router.post('/', MissionController.createMission);
router.get('/:id', MissionController.getMissionById);

export default router;
