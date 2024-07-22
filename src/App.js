import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Componentes/Main/Main';
import Dog from './Componentes/Dog/Dog';
import Registro from './Componentes/Registro/Registro';
import VerUsers from './Componentes/Users/Users';
import DataDisplay from './Componentes/DataContext/DataDisplay';
import Formulario from './Componentes/FormMongo/Form_mongo';
import { DataProvider } from './Componentes/DataContext/DataContex';

function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/dog/" element={<Dog />} />
                    <Route path='/register' element={<Registro />} />
                    <Route path='/users' element={<VerUsers />} />
                    <Route path='/dataa' element={<DataDisplay />} />
                    <Route path='/formmongo' element={<Formulario />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;