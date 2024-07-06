import { CreateUserDTO } from "../DTOs/CreateUserDTO";
import IUser from "../interfaces/IUser";
import { AddressRepository } from "../repositories/AddressRepository";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {

  userRepository = new UserRepository();
  addressRepository = new AddressRepository();

  async getUser(): Promise<IUser[]> {
    const users = await this.userRepository.getUsers();
    if (!users) {
      throw new Error("Nenhum usuário encontrado");
    }
    return users;
  }

  async createUser(newUser: CreateUserDTO): Promise<IUser> {
    const { name, email, cpf, cep, city, street, number, complement } = newUser;


    if (!name || !email || !cpf  || !cep || !city || !street || !number ) {
      throw new Error("Missing required fields");
    }

    const user: IUser = {
      name,
      email,
      cpf,
      address: {
        cep,
        city,
        street,
        number: +number,
        complement
      },
    };

    const createdUser = await this.userRepository.createUser(user);

    if (!createdUser) {
      throw new Error("Falha ao criar usuário");
    }

    return createdUser;
  }


  async updateUser(userId: number, updateUser: Partial<IUser>): Promise<IUser> {
    const { name, email, cpf, address } = updateUser;

    if (!name || !email || !cpf || !address || !address.cep || !address.city || !address.street || !address.number) {
      throw new Error("Missing required fields");
    }

    const currentAddress = await this.addressRepository.getAddressByUserId(userId)

    const user: IUser = {
      id: userId,
      name,
      email,
      cpf,
      address: {
        id: currentAddress?.id,
        cep: address.cep,
        city: address.city,
        street: address.street,
        number: address.number,
        complement: address.complement || "",
      },
    };

    const updatedUser = await this.userRepository.updateUser(user);

    if (!updatedUser) {
      throw new Error("Falha ao atualizar usuário");
    }

    return updatedUser;
  }

  async deleteUser(userId: number): Promise<void> {
    const user = await this.userRepository.getUserById(userId);
    if (!user) {
      throw new Error(`Usuário com ID ${userId} não encontrado`);
    }
  
    await this.userRepository.deleteUser(userId);
  
    // Verifica se há um endereço associado e deleta-o
    if (user.address && user.address.id) {
      await this.addressRepository.deleteAddres(user.address.id);
    }
  }
  
}
