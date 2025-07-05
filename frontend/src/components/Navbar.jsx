import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar(){

    const navigate = useNavigate();
    function goRead(){
        navigate('/Ler');
    }
    function goWrite(){
        navigate('/')
    }
    return(
        <>
            <div className='btns'>
                <button id='btnesc' onClick={goWrite}>Escrever</button>
                <button id='btnler' onClick={goRead}  >Ler</button>                
            </div>
        </>
    )
}

export default Navbar