import { useState, useEffect } from 'react';
import * as S from '../../style/styledComponents';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { Record } from '../interface/record';
import UserModal from '../Modal/userDetails';
import UpdateUser from '../Modal/updateUser';
import ConfirmDelete from '../Modal/confirmDelete';

const SearchingForData: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [editingRecord, setEditingRecord] = useState<Record | null>(null);
  const [selectedUser, setSelectedUser] = useState<Record | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:3333/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data: Record[]) => {
        setRecords(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (record: Record) => {
    setEditingRecord(record);
  };

  const handleSave = (updatedRecord: Record) => {
    setRecords((prevRecords) =>
      prevRecords.map((rec) => (rec.id === updatedRecord.id ? updatedRecord : rec))
    );
    setEditingRecord(null);
  };

  const handleCancel = () => {
    setEditingRecord(null);
  };

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3333/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          return resp.text().then((text) => {
            throw new Error(text);
          });
        }
        setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
      })
      .catch((err) => console.error('Failed to delete record:', err));
  };

  const openModal = (user: Record) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const openConfirmationModal = (id: number) => {
    setRecordToDelete(id);
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setRecordToDelete(null);
  };

  const confirmDelete = () => {
    if (recordToDelete !== null) {
      handleDelete(recordToDelete);
      closeConfirmationModal();
    }
  };

  return (
    <S.Table>
      <S.Title>Registros Salvos</S.Title>
      {records.length > 0 ? (
        records.map((record) => (
          <S.Register key={record.id}>
            {record.id} - {record.name} - {record.email}
            <S.VerMais to='' onClick={() => openModal(record)}> Ver mais</S.VerMais>
            <AiFillEdit onClick={() => handleEdit(record)} />
            <MdDelete onClick={() => openConfirmationModal(record.id)} />
          </S.Register>
        ))
      ) : (
        <p>Carregando dados ...</p>
      )}

      {selectedUser && (
        <UserModal isOpen={isModalOpen} closeModal={closeModal} user={selectedUser} />
      )}

      {editingRecord && (
        <UpdateUser
          isOpen={true}
          user={editingRecord}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <ConfirmDelete
        openModalDelete={isConfirmationModalOpen}
        closeModalDelete={closeConfirmationModal}
        confirmDelete={confirmDelete}
      />
    </S.Table>
  );
};

export default SearchingForData;
