import { useEffect, useState } from "react";
import Nomsg from "../components/Nomsg";
import { useNavigate, useLocation} from "react-router-dom";
import "./Ler.css"
import { Route, Routes } from "react-router-dom";
import Editar from "./Editar";
import Popup from "../components/popup.jsx";
import Logo from "../components/Logo.jsx";

function Ler(){

    const [usuarios, setUsuarios] = useState([]);
    const [vazio, setVazio] = useState(null);
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        fetch('https://mural-do-amor-backend-production.up.railway.app/lermensagem')
            .then(response => response.json())
            .then(data => {
                if (data.usuarios && data.usuarios.length > 0) {
                    setUsuarios(data.usuarios);
                } else {
                    setVazio(true);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const navigate = useNavigate();
    function goEdit(usuario){
        navigate(`/Ler/Editar`, { state: {usuario, editou:true}});

    }

    function excluir(id){
        setPopup(id);
    }

    

    return(
        <>
            <div className="Mensages">
                <div className="logo">
                    <Logo/>
                </div>
                { vazio && <Nomsg/>}
                {usuarios.map((usuario)=>(
                    <div className="mainmsg">
                        <div className="msgbox" key={usuario.id}>
                            <p id="nome">Autor(a): {usuario.nome}</p>
                            <div className="msgarea">
                                <p id="mensagem">{usuario.mensagem}</p>
                            </div>
                            <p id="data">{usuario.data}</p>
                            <p id="dataedit">{usuario.data_edicao}</p>
                            <div className="btns">
                                <button id="btnedit" onClick={()=>goEdit(usuario)}>Editar ✏️</button>
                                <button id="btndelete" onClick={()=>excluir(usuario.id)}>Excluir 🗑️</button>
                            </div>
                            <div id="popupdiv">
                                {usuario.id == popup && <Popup popup={popup} setPopup={setPopup} idUsuario={usuario.id}/>}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

export default Ler