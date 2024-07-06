export interface Record {
  id: number;
  name: string;
  email: string;
  cpf: string;
  address: {
    cep: number;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
}
