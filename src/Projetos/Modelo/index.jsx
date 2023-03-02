import './Modelo.css'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineGithub } from 'react-icons/ai'

export default function Modelo(props){
    return(
        <div className='modeloContainer'>
            <img src={props.urlImg} alt="imagem"/>
            <h3>{props.titulo}</h3>
            <span>{props.subtitulo}</span>
            <a target='_blank' href={props.urlProjeto}>
                <CgWebsite/>
                Clique aqui para ver site
            </a>
            <a target='_blank' href={props.urlGitHub}>
                <AiOutlineGithub/>
                Clique aqui para ver GitHub
            </a>
        </div>
    )
}