import './Section.css'
import '../Projetos/Projetos.css'

import { projetosContent } from '../../Data'
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
import { useState } from 'react'

export default function Section(){

    const [filtro,setFiltro] = useState('')
    const removerAcentos = filtro.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const pesquisaFiltrada = removerAcentos.trim().replaceAll(' ','').toLowerCase()

    const filtragem = projetosContent.filter(
        (proj) => 
        proj.name.startsWith(pesquisaFiltrada)
    )
    
    return(
        <section>
            <div className="infoContent">

                <h3>Bem vindo ao meu portifólio</h3>
                <div className="joaoContent">
                    <h1>Olá mundo, eu sou <span>João Gabriel</span> </h1>
                    <p>Estou estudando <span>Front-end web</span> e busco 1º vaga como desenvolvedor júnior ou estagiário</p>
                </div>

                <div className="skillContent">

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
                    
                    <hr className='linha'/>

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
                </div>

            </div>
        
            <div className="filterContent">
                <h3>Filtre por: </h3>
                <ul>
                    <li>React</li>
                    <li>Cursos</li>
                    <li>Repositórios</li>
                </ul>

                <input type="search" onChange={filtro => setFiltro(filtro.target.value)}/>

            </div>

            <ul>
                {filtragem.map((proj) =>(
                    <li key={proj.name}>
                        {proj.project}
                    </li>
                ))}
            </ul>

        </section>
    )
}
