import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Componentes/Main/Main';
import Dog from './Componentes/Dog/Dog';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/dog/" element={<Dog />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;