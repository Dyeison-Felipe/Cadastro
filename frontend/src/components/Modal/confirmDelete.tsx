import React from 'react';
import * as S from "../../style/styledComponents";

interface PropsDelete {
  openModalDelete: boolean;
  closeModalDelete: () => void;
  confirmDelete: () => void;
}

const ConfirmDelete: React.FC<PropsDelete> = ({
  openModalDelete,
  closeModalDelete,
  confirmDelete,
}) => {
  if (!openModalDelete) return null;
  
  return (
    <S.CustomModal
      isOpen={openModalDelete}
      onRequestClose={closeModalDelete}
      contentLabel="Confirmação de Exclusão"
      ariaHideApp={false}
    >
      <S.Title>Tem certeza que deseja excluir o Cadastro?</S.Title>
      <S.Button onClick={confirmDelete}>Confirmar</S.Button>
      <S.Button onClick={closeModalDelete}>Cancelar</S.Button>
    </S.CustomModal>
  );
};

export default ConfirmDelete;
