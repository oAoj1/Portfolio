import '../Projetos.css'
import { GiBrain } from 'react-icons/gi'
import { BsClockFill } from 'react-icons/bs'


export default function Cursos(){

    return(
        <div className="coursesContent">

        <hr className='linha'/>

            <div className="coursesTitle">
                <h2>Cursos</h2><GiBrain/>
            </div>

            <div className="contentThree">
                <div className="innerProjectsContent">
                    <img src="/imagens/organo.png" alt="organo" />
                    <h3>Organograma</h3>
                    <span>Organize seu equipe com o organograma</span>
                    <a target="_blank" href="https://organograma-oaoj1.vercel.app">Clique aqui</a>
                </div>

                <div className="innerProjectsContent">
                    <BsClockFill className='clockLogo'/>
                    <h3>Estudos</h3>
                    <span>Cronometre seu tempo de estudo</span>
                    <a target="_blank" href="https://alura-studies-oaoj1.vercel.app">Clique aqui</a>
                </div>
            </div>
        </div>
    )
}