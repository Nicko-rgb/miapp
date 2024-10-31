import { useState } from "react";
import './studentform.css';
import useStudentStore from "../../Store/studentStore";
import Navegador from "../Navegador/Navegador";

const StudentForm = () => {
    const { addStudent } = useStudentStore();
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addStudent(studentData); // Espera a que se complete la adición
            console.log(studentData);
            alert('Registro Exitoso');
            setStudentData({ firstName: "", lastName: "" }); // Reinicia el formulario solo una vez
        } catch (error) {
            console.error("Error al agregar estudiante:", error);
            alert("Error al agregar estudiante. Inténtalo nuevamente."); // Notificación al usuario
        }
    };

    return (
        <div className="form-register">
            <Navegador />
            <h1>Student Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter firstname"
                    required
                    name="firstName"
                    value={studentData.firstName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Enter lastname"
                    required
                    name="lastName"
                    value={studentData.lastName}
                    onChange={handleInputChange}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default StudentForm;