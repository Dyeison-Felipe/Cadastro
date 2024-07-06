import React, { useState } from "react";
import { Record } from "../interface/record";
import * as S from "../../style/styledComponents";

interface UserPropsModal {
  isOpen: boolean;
  user: Record;
  onSave: (updatedRecord: Record) => void;
  onCancel: () => void;
}

const UpdateUser: React.FC<UserPropsModal> = ({
  isOpen,
  user,
  onSave,
  onCancel,
}) => {
  const [updatedRecord, setUpdatedRecord] = useState<Record>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedRecord({ ...updatedRecord, [name]: value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedRecord({
      ...updatedRecord,
      address: { ...updatedRecord.address, [name]: value },
    });
  };

  const handleSave = () => {
    fetch(`http://localhost:3333/users/${updatedRecord.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecord),
    })
      .then((resp) => {
        if (!resp.ok) {
          return resp.text().then((text) => {
            throw new Error(text);
          });
        }
        return resp.json();
      })
      .then((data: Record) => {
        onSave(data);
      })
      .catch((err) => console.error("Failed to save record:", err));
  };

  return (
    <S.CustomModal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Atualizar Cadastro"
      ariaHideApp={false} // Para evitar erros de acessibilidade ao usar o React Testing Library
    >
      <S.Title>Atualizar Cadastro</S.Title>
      <S.Label>
        <S.TextLabel>Nome:</S.TextLabel>
        <S.Input
          type="text"
          name="name"
          value={updatedRecord.name}
          onChange={handleChange}
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>Email:</S.TextLabel>
        <S.Input
          type="text"
          name="email"
          value={updatedRecord.email}
          onChange={handleChange}
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>CPF:</S.TextLabel>
        <S.Input
          type="text"
          name="cpf"
          value={updatedRecord.cpf}
          onChange={handleChange}
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>CEP:</S.TextLabel>
        <S.Input
          type="text"
          name="cep"
          value={updatedRecord.address.cep}
          onChange={handleAddressChange}
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>Cidade:</S.TextLabel>
        <S.Input
          type="text"
          name="city"
          value={updatedRecord.address.city}
          onChange={handleAddressChange}
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>Rua:</S.TextLabel>
        <S.Input
          type="text"
          name="street"
          value={updatedRecord.address.street}
          onChange={handleAddressChange}
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>Número:</S.TextLabel>
        <S.Input
          type="text"
          name="number"
          value={updatedRecord.address.number}
          onChange={handleAddressChange}
        />
      </S.Label>

      <S.Label>
        <S.TextLabel>Complemento:</S.TextLabel>
        <S.Input
          type="text"
          name="complement"
          value={updatedRecord.address.complement}
          onChange={handleAddressChange}
        />
      </S.Label>
      <S.Button onClick={handleSave}>Salvar</S.Button>
      <S.Button onClick={onCancel}>Cancelar</S.Button>
    </S.CustomModal>
  );
};

export default UpdateUser;
