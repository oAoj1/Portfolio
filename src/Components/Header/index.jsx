import './Header.css'
import { Link } from 'react-router-dom'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

export default function Header(){
    return(
        <header>

            <div className="logoContent">
                <Link to="/">
                    <img src="/imagens/jg.png" alt="logo" />
                </Link>
            </div>

            <span className='spanContent'>
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

                <ul className="mediasContent">
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
                    <li>
                        <a 
                            target="_blank" 
                            href="https://wa.me/5511970727051">
                            <RiWhatsappFill/>
                        </a>
                    </li>
                </ul>
            </span> 
            
        </header>
    )
}