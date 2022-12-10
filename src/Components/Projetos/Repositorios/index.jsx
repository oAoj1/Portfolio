import '../Projetos.css'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { SiJavascript } from 'react-icons/si'
import { MdSchool } from 'react-icons/md'
import Fade from 'react-reveal/Fade';

export default function Repositorios(){

    return(
        <div>
            <Fade left>
            <div className="repositoriesContent">

                <hr className='linha'/>

                    <div className="repositoriesTitle">
                        <h2>Repositórios GitHub</h2><RiGitRepositoryFill/>
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
            </Fade>
            
        </div>
        
    )
}