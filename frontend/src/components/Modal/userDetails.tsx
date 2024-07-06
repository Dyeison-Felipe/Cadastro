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
        <strong>ID:</strong> {user.id}
      </S.Register>
      <S.Register>
        <strong>Nome:</strong> {user.name}
      </S.Register>
      <S.Register>
        <strong>Email:</strong> {user.email}
      </S.Register>
      <S.Register>
        <strong>CPF:</strong> {user.cpf}
      </S.Register>
      <S.Register>
        <strong>CEP:</strong> {user.address.cep}
      </S.Register>
      <S.Register>
        <strong>Cidade:</strong> {user.address.city}
      </S.Register>
      <S.Register>
        <strong>Rua:</strong> {user.address.street}
      </S.Register>
      <S.Register>
        <strong>Número:</strong> {user.address.number}
      </S.Register>
      <S.Register>
        <strong>Complemento:</strong> {user.address.complement}
      </S.Register>
      <S.Button onClick={closeModal}>Fechar</S.Button>
    </S.CustomModal>
  );
};

export default UserDetails;
