import { useEffect, useState } from "react";
import './Txtbox.css'

function Txtbox({mensagem, setMensagem}){


    return(
        <>
            <div className='txtbox'>
                <textarea id="mensagem" name="mensagem" rows="15" cols="50" value={mensagem} onChange={e=>setMensagem(e.target.value)} placeholder="Escreva sua mensagem de amor..." ></textarea>

            </div>
        </>
    )
}

export default Txtbox