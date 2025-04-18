import express from 'express'
import { UserRoutes } from '../modules/User/user.routes'
import { AuthRouter } from '../modules/Auth/auth.route'
import { CustomerRoutes } from '../modules/Customer/customer.route'
import { BikeRoutes } from '../modules/Bike/bike.route'

const router = express.Router()

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoutes
    }, 
    {
        path: '/auth',
        route: AuthRouter
    },
    {
        path: '/customers',
        route: CustomerRoutes
    },
    {
        path: '/bikes',
        route: BikeRoutes
    }
]


moduleRoutes.forEach(route =>  router.use(route.path, route.route))

export default router