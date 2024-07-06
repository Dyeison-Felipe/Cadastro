import { Router} from 'express'
import userRouter from '../controller/UserController'
import addressRouter from '../controller/AddressController'

const routers = Router()

// aqui coloica todas as rotas 

routers.use('/users', userRouter)

routers.use('/address', addressRouter)

export default routers