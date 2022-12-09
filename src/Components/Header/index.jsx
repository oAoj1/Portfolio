import './Header.css'
import '../Section/Section.css'
import { Link } from 'react-router-dom'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

export default function Header(){

    return(
        <header>

            <div className="logoContent">
                <Fade top>
                    <Link to="/">
                        <img src="/imagens/jg.png" alt="logo" />
                    </Link>
                </Fade>
            </div>

            <span className='spanContent'>
                <Fade bottom>
                    <ul className="menuContent">
                        <Link to="/">
                            <li>home</li>
                        </Link>
                        <Link to="/sobremim">
                            <li>sobre mim</li>
                        </Link>
                        <Link to="/projetos">
                            <li>projetos</li>
                        </Link>
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
            </span> 
            
        </header>
    )
}