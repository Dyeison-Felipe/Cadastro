import React, { ChangeEvent } from 'react';
import * as S from '../../style/styledComponents';
import { UseFormRegister} from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  cpf: string;
  cep: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

interface FormFieldProps {
  id: keyof FormData;
  type: string;
  label: string;
  register: UseFormRegister<FormData>;
  error?: string;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string
}



const FormField: React.FC<FormFieldProps> = ({ id, type, label, register, error, maxLength, onChange, value}) => (
  <S.Label>
    <S.TextLabel>{label}:</S.TextLabel>
    <S.Input id={id as string} type={type} {...register(id)} maxLength={maxLength} onChange={onChange} value={value}/>
    {error && <S.ErrorsInputs>{error}</S.ErrorsInputs>}
  </S.Label>
);

export default FormField;

