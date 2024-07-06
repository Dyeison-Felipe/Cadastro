import IAddress from "../interfaces/IAddress";
import { AddressRepository } from "../repositories/AddressRepository";

export class AddressService{

  addressRepository = new AddressRepository()

  async getAddress(): Promise<IAddress[]>{
    const address = await this.addressRepository.getAddress()
    return address
  }

  async createAddress(address:IAddress): Promise<IAddress>{
    const createdAddress = await this.addressRepository.createAddres(address)
    return createdAddress
  }

  async updateAddress(address: IAddress): Promise<IAddress>{
    const updatedAddress = await this.addressRepository.updateAddres(address)
    return updatedAddress
  }

  async deleteAddress(idAddress:number): Promise<void>{
    await this.addressRepository.deleteAddres(idAddress)
  }

}