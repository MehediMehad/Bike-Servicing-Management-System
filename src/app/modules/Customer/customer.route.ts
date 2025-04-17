import express from 'express'
import { CustomerController } from './customer.controller';



const router = express.Router();
router.post('/', CustomerController.createCustomer)
router.get('/', CustomerController.getAllFromDB)
router.get('/:id', CustomerController.getByIdFromDB)

export const CustomerRoutes = router;