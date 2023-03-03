import './Section.css'
import '../../Projetos/Projetos.css'

import HardSkills from '../../Skills/Hard';
import SoftSkill from '../../Skills/Soft';
import Fade from 'react-reveal/Fade';
import { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { projetosContent } from '../../Data/projetosData'
import { todosProjetosData } from '../../Data/todosProjetosData'
import SobreMim from '../AboutMe/2_SobreMim';

export default function Section(){ 

    const tiposProjetos = [
        'Todos',
        'React',
        'Cursos',
        'Repositórios'
    ]   

    const rankArray = [ 
        'S - Ótimo',
        'A - Muito bom',
        'B - Bom',
        'C - Razoável',
        'D - Pouca experiência'
    ]
    
    function filtrarProjetoClique(projeto){
        setFiltro(projeto)
    }

    const [filtro,setFiltro] = useState('')
    const filtragem = projetosContent.filter((project) => project.name.includes(filtro))

    return(
        <section id='homeSection'>
            <div className="infoContent">

            <h3>Bem vindo ao meu portifólio</h3>
                
                <section className="superContent">
                    <Fade left>
                        <div className="joaoContent">
                            <h1>Olá mundo, eu sou <span>João Marques</span> </h1>
                            <p>Estudando as <span>tecnologias</span> para ser o melhor programador possível</p>
                        </div>
                    </Fade>
                        
                    <div className="reactLogoContent">
                        <Fade right>
                            <FaReact/>
                        </Fade>
                    </div>
                       
                </section>
                
                <section className="skillsContent" id='skillsSection'>

                    <div className="levelContent">
                        <h4>Rank: </h4>
                        <ul>
                            {rankArray.map(letras => (
                                <li key={letras}>
                                    {letras}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h5 className="segureArrasteTexto">Segure e arraste para ver as habilidades</h5>

                    <div className="hardSkill">
                        <Fade right>
                            <HardSkills/>
                        </Fade>
                    </div>
                    
                    <hr className='linha'/>

                    <div className="softSkill">
                        <Fade left>
                            <SoftSkill/>
                        </Fade>
                    </div>
                    
                </section>

            </div>

            <section className="projectsContent" id='projetosSection'>  
                <div className="myProjectsContent">
                    <Fade top>
                        <h2>Meus projetos</h2>
                        <p>Ao longo dos meus estudos fui colocando em prática o que aprendi, veja algum dos projetos em que criei</p>
                        <div className="filterContent">
                            <h3>Busque por: </h3>

                            {tiposProjetos.map((itens,index) => (
                                <button 
                                    className='botoesFiltragem'
                                    key={index} 
                                    onClick={() => filtrarProjetoClique(itens)}
                                >
                                    <span>
                                        {itens}    
                                    </span> 
                                </button> 
                                
                            ))}

                        </div>
                    </Fade>
                    
                    {filtro == 'Todos' ? todosProjetosData.project : 
                        <ul className='projetosFiltrados'>
                            {filtragem.map((project) => (
                                <li key={project.name}>
                                    {project.project}
                                </li>
                            ))}
                        </ul>
                    }

                </div>
                
            </section>

            <section className='sobremimContainer' id='sobremimSection'>
                <SobreMim/>
            </section>

        </section>
    )
}
