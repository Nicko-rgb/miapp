import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Componentes/Main/Main';
import Dog from './Componentes/Dog/Dog';
import Registro from './Componentes/Registro/Registro';
import VerUsers from './Componentes/Users/Users';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/dog/" element={<Dog />} />
                <Route path = '/formulario' element={<Registro />} />
                <Route path = '/users' element={<VerUsers />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;