
import { useState } from "react";
import Lstbox from "../components/Lstbox";
import Txtbox from "../components/Txtbox";
import Enviar from "../components/Enviar";
import './Escrever.css'

function Escrever(){
    const [mensagem, setMensagem] = useState('');
    const [pessoa, setPessoa] = useState('André');
    return(
        <>
            <h2>Quem é você?</h2>
            <div className='lstb'>
                <Lstbox pessoa={pessoa} setPessoa={setPessoa}/>
            </div>

            <div className='txtb'>
                <Txtbox mensagem={mensagem} setMensagem={setMensagem}/>
            </div>

            <div className="btnenv">
                <Enviar mensagem={mensagem} setMensagem={setMensagem} pessoa={pessoa} setPessoa={setPessoa}/>
            </div>
        </>
    )
}

export default Escrever