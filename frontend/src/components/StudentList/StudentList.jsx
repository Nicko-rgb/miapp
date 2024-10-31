import React, { useEffect, useState } from 'react';
import './list.css';
import Navegador from '../Navegador/Navegador';
import useStudentStore from '../../Store/studentStore';
import EditModal from './EditModal';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const StudentList = () => {
    const { students, fetchStudents, deleteStudent } = useStudentStore();
    const [deleteModal, setDeleteModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null); 
    const [editModal, setEditModal] = useState(false);
    const [studentToEdit, setStudentToEdit] = useState(null); // Estado para almacenar el estudiante a editar

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    const handleDelete = (id) => {
        deleteStudent(id);
        setDeleteModal(false);
    }

    const handleDeleteModal = (studentId) => {
        setStudentToDelete(studentId);
        setDeleteModal(!deleteModal);
    }

    const handleEditModal = (student) => {
        setStudentToEdit(student); // Establece el estudiante a editar
        setEditModal(!editModal); // Alterna la visibilidad del modal de edición
    }

    return (
        <div className='lista'>
            <Navegador />
            <h2>LIST STUDENTS</h2>
            <div className='cards-container'>
                {students.map((student) => (
                    <div className='card' key={student.id}>
                        <p className='id'>{student.id}</p>
                        <p>{student.firstName} {student.lastName}</p>
                        <CiEdit className='edit-ico ico' onClick={() => handleEditModal(student)} />
                        <RiDeleteBin5Fill className='delete-ico ico' onClick={() => handleDeleteModal(student.id)} />
                    </div>
                ))}
            </div>
            {deleteModal && (
                <div className='modal-delete'>
                    <div className="contend">
                        <p>Are you sure you want to delete this student?</p>
                        <div className="btns">
                            <button className='btn-cancel' onClick={handleDeleteModal}><IoClose />Cancel</button>
                            <button className='btn-confirm' onClick={() => handleDelete(studentToDelete)}><RiDeleteBin5Fill />Confirm</button>
                        </div>
                    </div>
                </div>
            )}
            {editModal && (
                <EditModal student={studentToEdit} onClose={handleEditModal} />
            )}
        </div>
    );
};

export default StudentList;
