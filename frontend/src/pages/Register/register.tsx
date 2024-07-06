import { useState, ChangeEvent } from "react";
import * as S from "../../style/styledComponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationSchema, formatCpf, formatCep} from "../../validation/userValidation";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/Inputs/inputs";

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

const Home = () => {
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userValidationSchema),
  });

  const navigate = useNavigate();

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedCpf = formatCpf(event.target.value);
    setCpf(formattedCpf);
  };

  const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedCep = formatCep(event.target.value);
    setCep(formattedCep);

  };
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("http://localhost:3333/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result);
      navigate("/registration");
    } catch (error) {
      console.log("Erro ao enviar dados", error);
    }
  };

  return (
    <>
      <S.Nav>
        <S.Linkk to="/">voltar</S.Linkk>
      </S.Nav>
      <S.Section>
        <S.Title>Cadastre um usuário</S.Title>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="name"
            type="text"
            label="Nome"
            register={register}
            error={errors.name?.message}
          />
          <FormField
            id="email"
            type="text"
            label="Email"
            register={register}
            error={errors.email?.message}
          />
          <FormField
            id="cpf"
            type="text"
            label="Cpf"
            register={register}
            error={errors.cpf?.message}
            maxLength={14}
            onChange={handleCpfChange}
            value={cpf}
          />
          <FormField
            id="cep"
            type="text"
            label="Cep"
            register={register}
            error={errors.cep?.message}
            maxLength={9}
            onChange={handleCepChange}
            value={cep}
          />
          <FormField
            id="city"
            type="text"
            label="Cidade"
            register={register}
            error={errors.city?.message}
          />
          <FormField
            id="street"
            type="text"
            label="Rua"
            register={register}
            error={errors.street?.message}
          />
          <FormField
            id="number"
            type="text"
            label="Numero"
            register={register}
            error={errors.number?.message}
          />
          <FormField
            id="complement"
            type="text"
            label="Complemento"
            register={register}
            error={errors.complement?.message}
          />

          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>
      </S.Section>
    </>
  );
};

export default Home;
