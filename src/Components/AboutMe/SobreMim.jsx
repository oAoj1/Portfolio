import Fade from 'react-reveal/Fade';
import './SobreMim.css'
import { useState } from 'react'
import { sobreMimData } from '../../Data/sobreMimData'

export default function SobreMim(){
    const sobreMimFiltro = [
        'Todos',
        'Biografia',
        'Cursos',
        'Expêriencia'
    ]

    function filtrarSobreMimClique(sobreMim){
        setFiltroSobreMim(sobreMim)
    }

    const [filtroSobreMim,setFiltroSobreMim] = useState()
    const filtragem = sobreMimData.filter((project) => project.name.includes(filtroSobreMim))

    return(
        <div className="sobreMimContent">
            <Fade left>
                <h1>Sobre mim</h1>
            </Fade>

            <div className="sobreMimfilterContent">
                <h3>Busque por: </h3>

                {sobreMimFiltro.map((itens,index) => (
                    <button 
                        className='botoesFiltragem'
                        key={index} 
                        onClick={() => filtrarSobreMimClique(itens)}
                    >
                        <span>
                            {itens}    
                        </span> 
                    </button> 
                    
                ))}



            </div>

        </div>
    )
}