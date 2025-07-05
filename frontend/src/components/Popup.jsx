import { useEffect, useState } from "react";
import './Popup.css'

function Popup({popup, setPopup, idUsuario}){

    function cancela(){
        setPopup(null);
    }

    function excluirBd(idUsuario){
        const id = idUsuario;
        fetch('http://localhost:3000/excluir',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id})
        }).then(response => response.json()).then(data=>{
            if(data.sucesso){
                alert('Mensagem excluida com sucesso!');
                setPopup(null);
                window.location.reload();
            }
            else{
                alert('Erro ao excluir a mensagem.');
            }
        }).catch((err)=>{
            alert('Deu ruim na api do excluir!');
        })
    }

    return(
        <>
            <div className='Popup'>
                <div id="popup">
                    <h3>Tem certeza que quer excluir a mensagem?</h3>
                    <div id="btnspopup">
                        <button id="excluir" onClick={()=>excluirBd(idUsuario)}>Excluir</button>
                        <button id="cancelar" onClick={cancela}>Cancelar</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Popup