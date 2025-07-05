import { useEffect, useState } from "react";
import './Lstbox.css'

function Lstbox({pessoa, setPessoa}){

    

    return(
        <>
            <div className='lstbox'>
                <select  id="lst" name="nome" value={pessoa} onChange={e=>setPessoa(e.target.value)}>
                    <option value="André">André</option>
                    <option value="Taciane">Taciane</option>
                </select>

            </div>
        </>
    )
}

export default Lstbox