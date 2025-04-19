import express from 'express';
import { serviceController } from './service.controller';

const router = express.Router();

router.post('/', serviceController.createService);
router.get('/', serviceController.getAllFromDB);
router.get('/:id', serviceController.getByIdFromDB);
router.put('/:id', serviceController.updateIntoDB);
router.delete('/:id', serviceController.deleteIntoDB);

export const ServiceRoutes = router;