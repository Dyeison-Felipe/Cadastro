import Address from "../entities/Address";
import IAddress from "../interfaces/IAddress";
import { AppDataSource } from "../../database/data-source";


export class AddressRepository{
  
  addressRepository = AppDataSource.getRepository(Address)

  getAddress(): Promise<IAddress[]> {
    return this.addressRepository.find()
  }

  createAddres(address:IAddress): Promise<IAddress>{
    return this.addressRepository.save(address)
  }

  updateAddres(address: IAddress): Promise<IAddress>{
    return this.addressRepository.save(address)
  }

  async deleteAddres(idAddress: number): Promise<void>{
    await this.addressRepository.delete({id:idAddress})
  }

  async getAddressByUserId(userId: number): Promise<IAddress | null> {
    return await this.addressRepository.findOneBy({ user: {id: userId} });
  }
}