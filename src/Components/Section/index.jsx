import './Section.css'
import '../Projetos/Projetos.css'

import { useState } from 'react'
import { projetosContent } from '../../Data/projetosData'
import { FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaHandRock } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { GiThink } from 'react-icons/gi'
import { GiBrain } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { SiTypescript } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { BiHappyBeaming } from 'react-icons/bi'
import Fade from 'react-reveal/Fade';
import ListaProjetos from '../../Lista'


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
                            <p>Estou estudando <span>React</span> e busco 1º vaga como desenvolvedor Front-end</p>
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
                        <div className="hardSkillsContent">
                            <h2> <i>Hard Skills</i> </h2>
                            <p>Veja tecnologias em que possuo um <span className='verde'>breve conhecimento</span>, outras que <span className='amarelo'>estou estudando</span> e algumas que também já tive contato <span className='vermelho'>poucas vezes</span> </p>

                            <div className="techContent">
                                <ul>
                                    <li>hmtl<AiFillHtml5/></li>
                                    <li>css<DiCss3/></li>
                                    <li>java script<DiJavascript1/></li>
                                    <li>react.js<FaReact/></li>
                                    <li>node.js<IoLogoNodejs/></li>
                                    <li>python<FaPython/></li>
                                    <li>type script<SiTypescript/></li>
                                </ul>
                            </div>

                            <div className="levelContent">
                                <h4>Sublinhados de: </h4>
                                <ul>
                                    <li> <span className='verde'>Verde:</span> Possuo um breve conhecimento da tecnologia</li>
                                    <li> <span className='amarelo'>Amarelo:</span> Estou estudando a tecnologia no momento</li>
                                    <li> <span className='vermelho'>Vermelho:</span>  Já tive um contato com a tecnologia, porém pouca expêriencia</li>
                                </ul>
                            </div>
                        </div>
                    </Fade>

                    <hr className='linha'/>

                    <Fade left>
                        <div className="softSkillsContent">
                            <h2> <i>Soft Skills</i> </h2>
                            <ul>
                                <li><GiBrain/>criatividade</li>
                                <li><BiHappyBeaming/>carisma</li>
                                <li><AiFillHeart/>empatia</li>
                                <li><FaHandRock/>dedicação</li>
                                <li><GiThink/>curiosidade</li>
                                <li><AiFillEye/>observação</li>
                            </ul>
                        </div>
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
                                itensProjetos={tiposProjetos}
                                valor={filtro}
                                setFiltroProjeto={proj => setFiltro(proj)}
                            />
                        </div>
                    </Fade>

                    <ul className='projetosFiltrados'>
                        {filtragem.map((proj) => (
                            <li key={proj.name}>
                                {proj.project}
                            </li>
                        ))}
                    </ul>

                </div>
                
            </div>

        </section>
    )
}
