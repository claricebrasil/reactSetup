import { Routes, Route } from 'react-router-dom';
import Cadastro from '../src/paginas/Cadastro/Cadastro';
import Login from '../src/paginas/Login/Login';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
    )
}

export default AppRoutes;