import * as Yup from 'yup'

export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('Por favor, digite um e-mail válido').required('Campo obrigatório'),
  cpf: Yup.string().matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido').required('Campo obrigatório'),
  cep: Yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  street: Yup.string().required('Campo obrigatório'),
  number: Yup.string().required('Campo obrigatório'),
  complement: Yup.string().required('Campo obrigatório')
})

export const formatCpf = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove tudo o que não é dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o primeiro ponto
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca o segundo ponto
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o traço
};

export const formatCep = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove tudo o que não é dígito
    .replace(/(\d{5})(\d)/, '$1-$2'); // Coloca o traço
};
