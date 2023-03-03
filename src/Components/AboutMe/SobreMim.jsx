import Fade from 'react-reveal/Fade';
import './SobreMim.css'
import { useState } from 'react'
import { sobreMimData } from '../../Data/sobreMimData'
import { todosSobreMim } from '../../Data/todosSobreMimData';

export default function SobreMim(){
    const sobreMimFiltro = [
        'Tudo',
        'Biografia',
        'Cursos feitos',
        'Experiência'
    ]

    function filtrarSobreMimClique(sobreMim){
        setFiltroSobreMim(sobreMim)
    }

    const [filtroSobreMim,setFiltroSobreMim] = useState('Tudo')
    const filtragemSobreMim = sobreMimData.filter((about) => about.name.includes(filtroSobreMim))

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
        <hr />
                {filtroSobreMim == 'Tudo' ? todosSobreMim.aboutme : 
                    <ul className='sobreMimFiltrado'>
                        {filtragemSobreMim.map(about => (
                            <li key={about.name}>
                                {about.aboutme}
                            </li>
                        ))}
                    </ul>
                } 

            </div>

        </div>
    )
}