import { useEffect, useState } from 'react';
import './App.css';
import Escrever from './pages/Escrever';
import Navbar from './components/Navbar';
import Ler from './pages/Ler';
import Editar from './pages/Editar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  const [usuariosVet, setUsuariosVet] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [id, setId] = useState('');
  useEffect(() => {
    fetch('mural-do-amor-backend-production.up.railway.app')
      .then(response => response.json())   //captando resposta do http
      .then(data => {                      //data tem o json mandado pelo backend 
        setMensagem(data.mensagem);
      })
      .catch(err => {
        console.error('Erro ao buscar API:', err);
      });
  }, []); 

  return (
    <>
      <BrowserRouter>
      <div class='header'>
        <Navbar/>
      </div>

        <Routes>
          <Route path="/" element={<Escrever/>}/>
          <Route path="/Ler" element={<Ler usuariosVet={usuariosVet} setusuariosVet={setUsuariosVet}/>}/>
          <Route path="/Ler/Editar" element={<Editar usuariosVet={usuariosVet} setusuariosVet={setUsuariosVet}/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
