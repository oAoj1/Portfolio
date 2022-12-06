import '../Projetos.css'
import ScrollReveal from 'scrollreveal'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { SiJavascript } from 'react-icons/si'
import { MdSchool } from 'react-icons/md'

export default function Repositorios(){

    function carregar(){
        ScrollReveal().reveal('.repositoriesContent',{
            duration:1000
        })    
    }

    return(
        <div onLoad={carregar} className="repositoriesContent">

        <hr className='linha'/>

            <div className="repositoriesTitle">
                <h2>Outros repositórios</h2><RiGitRepositoryFill/>
            </div>

            <div className="contentFour">

                <div className="innerProjectsContent">
                    <SiJavascript className='jsLogo'/>
                    <h3>Projetos JavaScript</h3>
                    <span>Projetos simples feitos com Java Script</span>
                    <a target="_blank" href="https://github.com/oAoj1/Projetos-JavaScript">Clique aqui</a>
                </div>

                <div className="innerProjectsContent">
                    <MdSchool className='schoolLogo'/>
                    <h3>Trabalhos de escola</h3>
                    <span>Trabalhos apresentados na escola feitos em site</span>
                    <a target="_blank" href="https://github.com/oAoj1/Trabalhos-de-escola">Clique aqui</a>
                </div>

            </div>
        </div>
    )
}