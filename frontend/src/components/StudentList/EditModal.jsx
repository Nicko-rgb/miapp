import React, { useState, useEffect } from 'react';
import './edit.css';
import useStudentStore from '../../Store/studentStore';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const EditModal = ({ student, onClose }) => {
    const { updateStudent } = useStudentStore();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        phone: ''
    });

    // Establece los datos del estudiante al montar el componente
    useEffect(() => {
        if (student) {
            setFormData({
                firstName: student.firstName,
                lastName: student.lastName,
                email: student.email,
                age: student.age,
                phone: student.phone
            });
        }
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateStudent(student.id, formData);
            alert('Datos Actualizados.');
            onClose();
        } catch (error) {
            console.error('Error al actualizar:', error);
        }
    };

    return (
        <div className='edit-modal'>
            <div className="modal-content">
                <h3>EDIT STUDENT</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <div>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <div className="btns">
                        <button type="submit" className='btn-save'>
                            <IoCheckmarkDoneSharp /> Save
                        </button>
                        <button type="button" className='btn-cancel' onClick={onClose}>
                            <IoClose /> Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;