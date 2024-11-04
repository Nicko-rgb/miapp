import { useState } from "react";
import './studentform.css';
import { TiCloudStorage } from "react-icons/ti";
import useStudentStore from "../../Store/studentStore";
import Navegador from "../Navegador/Navegador";

const StudentForm = () => {
    const { addStudent } = useStudentStore();
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        phone: ""
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
            setStudentData({ firstName: "", lastName: "", email: "", age: "", phone: "" }); // Reinicia el formulario
        } catch (error) {
            console.error("Error al agregar estudiante:", error);
            alert("Error al agregar estudiante. Inténtalo nuevamente."); // Notificación al usuario
        }
    };

    return (
        <div className="form-register">
            <Navegador />
            <h2>STUDENT FORM</h2>
            <form onSubmit={handleSubmit}>
                <h2>REGITER STUDENT</h2>
                <label>
                    First Name
                    <input 
                        type="text" 
                        name="firstName"
                        required 
                        value={studentData.firstName} 
                        onChange={handleInputChange} 
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type="text" 
                        name="lastName"
                        required 
                        value={studentData.lastName} 
                        onChange={handleInputChange} 
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="email" 
                        name="email"
                        required 
                        value={studentData.email} 
                        onChange={handleInputChange} 
                    />
                </label>
                <div>
                <label>
                        Phone
                        <input 
                            type="tel" 
                            name="phone"
                            required 
                            value={studentData.phone} 
                            onChange={handleInputChange} 
                        />
                    </label>
                    <label>
                        Age
                        <input 
                            type="text" 
                            name="age"
                            required 
                            value={studentData.age} 
                            onChange={handleInputChange} 
                        />
                    </label>
                </div>
                <button type="submit"><TiCloudStorage className="ico-save"/>Save</button>
            </form>
        </div>
    );
};

export default StudentForm;