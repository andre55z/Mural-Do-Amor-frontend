import { useEffect, useState } from "react";
import logo from '../assets/logoimg.png';
import './Logo.css'

function Logo({pessoa, setPessoa}){

    

    return(
        <>
            <div className='Logo'>
                <img src={logo}></img>
            </div>
        </>
    )
}

export default Logo