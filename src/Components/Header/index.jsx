import './Header.css'
import '../Section/Section.css'
import { AiFillLinkedin,AiOutlineMenu,AiFillGithub,AiOutlineClose } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

export default function Header(){
    
    const itensMenuHeader = [
        'home',
        'skills',
        'projetos',
        'sobremim'
    ]

    const abrirMenuResponsivo = () =>{
        const menu = document.getElementById('menu')
        const abrir = document.getElementById('abrir')
    
        abrir.addEventListener('click',() => {
            menu.classList.toggle('mostrar')  
        })
    
        fechar.addEventListener('click',() => {
            menu.classList.toggle('mostrar')  
        })
       
    }

    const renderizarMenuNavegacao = (conteudos) => {

        const scrollarParaId = `${conteudos}Section`

        const scrollarMenuHeader = () => {
            document.getElementById(scrollarParaId).scrollIntoView({behavior:'smooth'})
        }

        return(
            <ul key={conteudos}>
                <li>
                    <button
                        className='botoesMenuHeader' 
                        onClick={scrollarMenuHeader}
                    >
                        {conteudos}
                    </button>
                </li>
            </ul>
        )

    }
    
    return(
        <header>

            <div className="logoContent">
                <Fade top>
                    <img src="/imagens/jg.png" alt="logo" />
                </Fade>
            </div>

            <nav className='spanContent'>
                <Fade bottom>
                    <ul className="menuContent">
                        {itensMenuHeader.map(itens => (
                            renderizarMenuNavegacao(itens)
                        ))}
                    </ul>
                </Fade>

                <ul className="mediasContent">
                    <Fade right>
                        <li>
                            <a 
                                target="_blank" 
                                href="https://github.com/oAoj1">
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li>
                            <a 
                                target="_blank" 
                                href="https://www.linkedin.com/in/joão-marques-52776123b/?trk=public_profile-settings_edit-profile-content&originalSubdomain=br">
                                <AiFillLinkedin/>
                            </a>
                        </li>
                    </Fade>
                </ul>
            </nav> 
            
            <div className="responsiveContainer">
                <Fade right>

                    <div className="hamburguerResponsive">
                        <AiOutlineMenu id='abrir' onClick={() => abrirMenuResponsivo()}/>
                    </div>
                    
                    <nav className='spanContentResponsive' id='menu'>

                        <div className="closeResponsive">
                            <AiOutlineClose id='fechar' onClick={() => abrirMenuResponsivo()}/>
                        </div>

                        <Fade bottom>
                            <ul className="menuContentResponsive">
                                {itensMenuHeader.map(itens => (
                                    renderizarMenuNavegacao(itens)
                                ))}
                            </ul>
                        </Fade>

                        <ul className="mediasContentResponsive">
                            <Fade right>
                                <li>
                                    <a 
                                        target="_blank" 
                                        href="https://github.com/oAoj1">
                                        <AiFillGithub/>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        target="_blank" 
                                        href="https://www.linkedin.com/in/joão-marques-52776123b/?trk=public_profile-settings_edit-profile-content&originalSubdomain=br">
                                        <AiFillLinkedin/>
                                    </a>
                                </li>
                            </Fade>
                        </ul>
                    </nav> 
                </Fade>
            </div>
            
        </header>
    )
}