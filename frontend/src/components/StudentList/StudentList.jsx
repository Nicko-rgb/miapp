import React, { useEffect, useState } from 'react';
import './list.css';
import Navegador from '../Navegador/Navegador';
import useStudentStore from '../../Store/studentStore';
import EditModal from './EditModal';
import Info from './Info';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { LiaThumbtackSolid } from "react-icons/lia";
import { BsFillInfoCircleFill } from "react-icons/bs";

const StudentList = () => {
    const { students, fetchStudents, deleteStudent } = useStudentStore();
    const [deleteModal, setDeleteModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [studentData, setStudentData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [infoModal, setInfoModal] = useState(false)

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
        setStudentData(student);
        setEditModal(!editModal);
    }

    const handleInfo = (student) => {
        setStudentData(student)
        setInfoModal(!infoModal)
    }

    // Función para manejar el cambio en el input de búsqueda
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filtra los estudiantes según el término de búsqueda
    const filteredStudents = students.sort((a, b) => a.id - b.id).filter(student => {
            const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
            const reverseFullName = `${student.lastName} ${student.firstName}`.toLowerCase();

            // Normaliza el término de búsqueda
            const normalizedSearchTerm = searchTerm.trim().toLowerCase().replace(/\s+/g, ' ');

            return fullName.includes(normalizedSearchTerm) || reverseFullName.includes(normalizedSearchTerm);
        });

    return (
        <div className='lista'>
            <Navegador />
            <h2>LIST STUDENTS</h2>
            <div className="box-buscar">
                <input
                    type="text"
                    placeholder="Search student ..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <MdPersonSearch className='ico-search' />
                <p>{filteredStudents.length} de {students.length}</p>
            </div>
            <div className='cards-container'>
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <div className='card' key={student.id}>
                            <span className='id'>{student.id}</span>
                            <p className='name'>• {student.firstName} {student.lastName}</p>
                            <p>• {student.email}</p>
                            <p>• {student.age} </p>
                            <p>• {student.phone} </p>
                            <LiaThumbtackSolid className='clavo' />
                            <div className="hueco"></div>
                            <RiDeleteBin5Fill className='delete-ico ico' onClick={() => handleDeleteModal(student.id)} />
                            <BsFillInfoCircleFill  className='info-ico ico' onClick={() => handleInfo(student)}/>
                            <CiEdit className='edit-ico ico' onClick={() => handleEditModal(student)} />
                        </div>
                    ))
                ) : (
                    <p>No hay resultados</p> 
                )}
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
                <EditModal student={studentData} onClose={handleEditModal} />
            )}
            {infoModal && (
                <Info student={studentData} onClose={handleInfo}/>
            )}
        </div>
    );
};

export default StudentList;