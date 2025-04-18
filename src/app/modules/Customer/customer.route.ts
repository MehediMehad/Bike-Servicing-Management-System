import express from 'express'
import { CustomerController } from './customer.controller';



const router = express.Router();
router.post('/', CustomerController.createCustomer)
router.get('/', CustomerController.getAllFromDB)
router.get('/:id', CustomerController.getByIdFromDB)
router.put('/:id', CustomerController.updateIntoDB)
router.delete('/:id', CustomerController.updateIntoDB)

export const CustomerRoutes = router;