import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import './Editar.css'

function Editar(){

    const location = useLocation();
    const navigate = useNavigate();
    const {usuario, editou} = location.state || {};
    const [msg, setMsg] = useState(usuario.mensagem)
    const [nome, setNome] = useState(usuario.nome)
    const [id, setId] = useState(usuario.id)
    const [sucesso, setSucesso] = useState(false);
    function salvar(){
        fetch('http://localhost:3000/update',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id, nome:nome, msg:msg })
        }).then(response => response.json()).then(data =>{
            if(data.sucesso){

                alert('Mensagem editada com sucesso!');
                navigate('/Ler', {state:{editou:true}});
            }
            else{
                alert('A mensagem não pode ficar vazia!');
            }
        }).catch((err)=>{
            alert('Erro ao salvar a mensagem!');
            if(err){
                console.log(err);
            }
        })
    }
    return(
        <>
            <div className='editing'>
                <h1>Editar mensagem</h1>
                <textarea id="txtedit" value={msg} onChange={e=>setMsg(e.target.value)}></textarea>
                <button id="btsalvar" onClick={salvar}>Salvar</button>
            </div>
        </>
    )
}

export default Editar