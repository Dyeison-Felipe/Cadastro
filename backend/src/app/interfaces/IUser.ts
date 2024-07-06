import IAddress from "./IAddress";

interface IUser{
  id?: number; // o ? quer dizer que é opcional
  name: string;
  email: string;
  cpf: string;
  address: IAddress;
}

export default IUser