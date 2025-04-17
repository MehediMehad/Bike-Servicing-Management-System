import express from 'express'
import { CustomerController } from './customer.controller';



const router = express.Router();
router.post('/', CustomerController.createCustomer)
router.get('/', CustomerController.getAllFromDB)

export const CustomerRoutes = router;