import './Section.css'
import '../Projetos/Projetos.css'

import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import { FaReact } from 'react-icons/fa'
import ListaProjetos from '../../Lista'
import { projetosContent } from '../../Data/projetosData'
import { todosProjetosData } from '../../Data/todosProjetosData'
import HardSkills from '../../Skills/Hard';
import {motion} from 'framer-motion'
import SoftSkill from '../../Skills/Soft';

export default function Section(){ 

    const tiposProjetos = [
        'Todos',
        'React',
        'Cursos',
        'Repositórios'
    ]

    const [filtro,setFiltro] = useState('')
    const removerAcentos = filtro.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const pesquisaFiltrada = removerAcentos.trim().replaceAll(' ','').toLowerCase()
    
    const filtragem = projetosContent.filter(
        (proj) => proj.name.includes(pesquisaFiltrada)
    ) 

    return(
        <section>
            <div className="infoContent">

            <h3>Bem vindo ao meu portifólio</h3>
                
                <div className="superContent">
                    <Fade left>
                        <div className="joaoContent">
                            <h1>Olá mundo, eu sou <span>João Gabriel</span> </h1>
                            <p>Estudando as <span>tecnologias</span> para ser o melhor programador possível</p>
                        </div>
                    </Fade>
                        
                    <div className="reactLogoContent">
                        <Fade right>
                            <FaReact/>
                        </Fade>
                    </div>
                       
                </div>
                
                <div className="skillContent">

                    <Fade right>
                        <div className="hardSkills">
                            <h2> <i>Hard Skills</i> </h2>
                            <p>Veja tecnologias em que possuo um <span className='verde'>breve conhecimento</span>, outras que <span className='amarelo'>estou estudando</span> e algumas que também já tive contato <span className='vermelho'>poucas vezes</span> </p>

                            <div className="levelContent">
                                <h4>Sublinhados de: </h4>
                                <ul>
                                    <li> <span className='verde'>Verde:</span> Possuo um breve conhecimento da tecnologia</li>
                                    <li> <span className='amarelo'>Amarelo:</span> Estou estudando a tecnologia no momento</li>
                                    <li> <span className='vermelho'>Vermelho:</span>  Já tive um contato com a tecnologia, porém pouca expêriencia</li>
                                </ul>
                            </div>
                            
                            <HardSkills/>

                        </div>
                    </Fade>

                    <hr className='linha'/>

                    <Fade left>
                        <SoftSkill/>
                    </Fade>
                   
                </div>

            </div>

            <div className="projectsContent">  
                <div className="myProjectsContent">
                    <Fade top>
                        <h2>Meus projetos</h2>
                        <p>Ao longo dos meus estudos fui colocando em prática o que aprendi, veja algum dos projetos em que criei</p>
                        <div className="filterContent">
                            <h3>Busque por: </h3>

                            <ListaProjetos
                                valor={filtro}
                                itensProjetos={tiposProjetos}
                                setFiltroProjeto={proj => setFiltro(proj)}
                            />
                        </div>
                    </Fade>
                    
                    {filtro == 'Todos' ? todosProjetosData.project : 
                        <motion.ul  
                            animate={{x:1,y:1}}
                            className='projetosFiltrados'
                        >
                            {filtragem.map((proj) => (
                                <li key={proj.name}>
                                    {proj.project}
                                </li>
                            ))}
                        </motion.ul>
                    }

                </div>
                
            </div>

        </section>
    )
}
