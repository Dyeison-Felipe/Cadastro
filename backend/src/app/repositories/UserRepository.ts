import { AppDataSource } from "../../database/data-source";
import User from "../entities/User";
import IUser from "../interfaces/IUser";

export class UserRepository {

  private userRepository = AppDataSource.getRepository(User);

  async getUsers(): Promise<IUser[]> {
    return await this.userRepository.find({ relations: ["address"] });
  }

  async createUser(user: IUser): Promise<IUser> {
    return await this.userRepository.save(user);
  }

  async updateUser(user: IUser): Promise<IUser | undefined> {
    if (!user.id) {
      throw new Error("User Id is required for updating");
    }

    await this.userRepository.save(user);
    const updatedUser = await this.userRepository.findOne({ where: { id: user.id }, relations: ["address"] });// busca pelo usurio

    if (updatedUser === null) { // verifica pelo usuario atualizado
      return undefined;
    }

    return updatedUser;
  }

  async deleteUser(userId: number): Promise<void> {
    await this.userRepository.delete({ id: userId }); // Certifique-se que isso deleta o usuário e seu endereço associado em cascata
  }

  async getUserById(userId: number): Promise<IUser | null> {
    return await this.userRepository.findOne({ where: { id: userId }, relations: ["address"] });
  }
}
