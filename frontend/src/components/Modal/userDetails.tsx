import React from 'react';
import { Record } from '../interface/record';
import * as S from '../../style/styledComponents';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  user: Record;
}

const UserDetails: React.FC<Props> = ({ isOpen, closeModal, user }) => {
  return (
    <S.CustomModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Detalhes do Usuário"
      ariaHideApp={false} // Para evitar erros de acessibilidade ao usar o React Testing Library
    >
      <S.Title>Detalhes do Usuário</S.Title>
      <S.Register>
        <S.Strong>ID:</S.Strong> {user.id}
      </S.Register>
      <S.Register>
        <S.Strong>Nome:</S.Strong> {user.name}
      </S.Register>
      <S.Register>
        <S.Strong>Email:</S.Strong> {user.email}
      </S.Register>
      <S.Register>
        <S.Strong>CPF:</S.Strong> {user.cpf}
      </S.Register>
      <S.Register>
        <S.Strong>CEP:</S.Strong> {user.address.cep}
      </S.Register>
      <S.Register>
        <S.Strong>Cidade:</S.Strong> {user.address.city}
      </S.Register>
      <S.Register>
        <S.Strong>Rua:</S.Strong> {user.address.street}
      </S.Register>
      <S.Register>
        <S.Strong>Número:</S.Strong> {user.address.number}
      </S.Register>
      <S.Register>
        <S.Strong>Complemento:</S.Strong> {user.address.complement}
      </S.Register>
      <S.Button onClick={closeModal}>Fechar</S.Button>
    </S.CustomModal>
  );
};

export default UserDetails;
