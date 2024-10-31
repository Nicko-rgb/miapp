import { create } from 'zustand';
import axios from 'axios';

const useStudentStore = create((set) => ({
    students: [],
    addStudent: async (student) => {
        try {
            const response = await axios.post('http://localhost:3001/student', student);
            set((state) => ({ students: [...state.students, response.data] }));
        } catch (error) {
            console.log('Error al agregar usuario:', error.message);
        }
    },
    fetchStudents: async () => {
        try {
            const response = await axios.get('http://localhost:3001/student');
            set({ students: response.data });
        } catch (error) {
            console.log('Error al obtener estudiante', error.message);
        }
    },
    deleteStudent: async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/student/${id}`);
            console.log('Estudiante borrado:', response.data);
            set((state) => ({ students: state.students.filter((student) => student.id !== id) }));
        } catch (error) {
            console.log('Error deleting student:', error.message);
        }
    },
    updateStudent: async (id, updatedData) => { // Nuevo método para actualizar estudiante
        try {
            const response = await axios.put(`http://localhost:3001/student/${id}`, updatedData);
            console.log('Estudiante actualizado:', response.data);
            set((state) => ({ students: state.students.map((student) => student.id === id ? { ...student, ...response.data } : student) }));
        } catch (error) {
            console.log('Error al actualizar estudiante:', error.message);
        }
    }
}));

export default useStudentStore;