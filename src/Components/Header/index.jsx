import './Header.css'
import '../Section/Section.css'
import { Link } from 'react-router-dom'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import ScrollReveal from 'scrollreveal'

export default function Header(){
    function carregar(){
        window.sr = ScrollReveal({reset:true})

        ScrollReveal().reveal('.logoContent',{
            duration:1000
        }) 
        ScrollReveal().reveal('.spanContent',{
            duration:1000
        }) 
        ScrollReveal().reveal('.logoContent',{
            duration:1500
        }) 
        ScrollReveal().reveal('.mediasContent',{
            duration:2000
        }) 

    }
    return(
        <header onLoad={carregar}>

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
                </ul>
            </span> 
            
        </header>
    )
}