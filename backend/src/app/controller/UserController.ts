import { Request, Response, Router} from 'express'
import IUser from '../interfaces/IUser'
import { UserService } from '../service/UserService';

const userRouter = Router();
const userService = new UserService()

userRouter.get('/', async (req:Request,res:Response): Promise<Response<IUser[]>> => { // : Promise<Response> esta parte indica que vai retornar uma promessa do tipo response
  try {
    const users = await userService.getUser()
    return res.status(200).json(users)
  } catch (error: any) {
    return res.status(500).json({message: error.message});
  }
})

userRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
  try {
    const newUser = req.body;

    console.log("Request body:", req.body); // Adicione este log para verificar os dados recebidos

    const createdUser = await userService.createUser(newUser);

    return res.status(201).json(createdUser);
  } catch (error: any) {
    console.error("Error creating user:", error); // Adicione este log para capturar o erro
    return res.status(500).json({ message: error.message });
  }
});

userRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updateUser = req.body;

    const updatedUser = await userService.updateUser(parseInt(id), updateUser);

    return res.status(200).json(updatedUser);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

userRouter.delete('/:id', async (req:Request<{id:string}>,res:Response): Promise<Response<void>> => {

  try {
    const {id} = req.params
    await userService.deleteUser(parseInt(id))
    return res.status(204).send()
  } catch (error) {
    return res.status(500).json(console.log(error));
  }
})

export default userRouter;