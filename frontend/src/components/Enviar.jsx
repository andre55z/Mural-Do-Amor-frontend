import { useEffect, useState } from "react";
import './Enviar.css'
import Suc from "./Suc";
import Nsuc from "./Nsuc";

function Enviar({mensagem, setMensagem, pessoa, setPessoa}){
    const [sucesso, setSucesso] = useState(false);
    const [Nsucesso, setNSucesso] = useState(true);
    function enviarMensagem(){
        fetch('http://localhost:3000/mensagem', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({texto: mensagem, pessoa: pessoa})
        }).then(response=>response.json()).then(data=>{
            setMensagem('');
            if(data.sucesso){
                setSucesso(data.sucesso);
                setTimeout(()=>{ setSucesso(false);}, 5000);
            }
            else{
                setNSucesso(data.sucesso);
                setTimeout(()=>{setNSucesso(true);}, 5000)
            }
        }).catch((err)=>{
            console.log(err);
            alert('Deu ruim');
        })
    }


    return(
        <>
            <div className='enviar'>
                <button id="btnenv" onClick={enviarMensagem}>Enviar</button>
                <div className="SucMnsg">
                    {sucesso && <Suc/> }
                    {!Nsucesso && <Nsuc/>}
                </div>
            </div>

        </>
    )
}

export default Enviar