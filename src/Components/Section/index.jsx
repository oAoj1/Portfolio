import './Section.css'
import { FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { FaPython } from 'react-icons/fa'

export default function Section(){

    const data = new Date()
    const anoAtual = data.getFullYear()
    const anoJoao = 2004
    const idade = anoAtual - anoJoao

    return(
        <section>
            <div className="infoContent">

                <h3>Bem vindo ao meu portifólio</h3>
                <div className="joaoContent">
                    <h1>Olá mundo, eu sou <span>João Gabriel</span> </h1>
                    <p>Tenho <strong>{idade} anos</strong> sou estudante de <span>Front-end web</span> e busco 1º vaga como desenvolvedor júnior (ou estagiário)</p>
                </div>

                <div className="skillContent">
                    <h2>Habilidades</h2>
                    <p>Veja algumas das tecnologias em que possuo um breve conhecimentoe e outras que estou aprendendo</p>
                    <div className="techContent">
                        <ul>
                            <li><AiFillHtml5/></li>
                            <li><DiCss3/></li>
                            <li><DiJavascript1/></li>
                            <li><FaReact/></li>
                            <li><IoLogoNodejs/></li>
                            <li><FaPython/></li>
                        </ul>
                    </div>
                </div>

            </div>
            
        </section>
    )
}
