import { Request, Response, Router } from "express";
import Address from "../entities/Address";
import IAddress from "../interfaces/IAddress";
import { AddressService } from "../service/AddressService";

const addressRouter = Router()
const addressService = new AddressService()

addressRouter.get('/', async (req:Request,res:Response): Promise<Response<IAddress[]>> => {
  const address = await addressService.getAddress()
  return res.status(200).json(address)
})

addressRouter.post('/', async (req:Request,res:Response): Promise<Response<IAddress>> => {
  const createdAddress = await addressService.createAddress(req.body)
  return res.status(201).json(createdAddress)
})

addressRouter.put('/', async (req:Request, res:Response): Promise<Response<IAddress>> => {
  const updatedAddress = await addressService.updateAddress(req.body)
  return res.status(200).json(updatedAddress)
})

addressRouter.delete('/:id', async(req:Request<{id:string}>,res:Response): Promise<Response<void>> => {
  await addressService.deleteAddress(+req.params.id)
  return res.status(204).send()
})

export default addressRouter