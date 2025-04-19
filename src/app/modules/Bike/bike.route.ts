import express from 'express'
import { BikeController } from './bike.controller';



const router = express.Router();
router.post('/', BikeController.createBike)
router.get('/', BikeController.getAllFromDB)
router.get('/:id', BikeController.getByIdFromDB)

export const BikeRoutes = router;