import './Footer.css'
import { Link } from 'react-router-dom'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer(){

    return(
        <footer>

            <ul className='mediasContentF'>
                <li>
                    <a target="_blank" href="https://github.com/oAoj1">
                        <AiFillGithub/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/joão-marques-52776123b/?trk=public_profile-settings_edit-profile-content&originalSubdomain=br">
                        <AiFillLinkedin/>
                    </a>
                </li>
            </ul>

            <div className="logoContentF">
                <Link to="/">
                    <img src="/imagens/jg.png" alt="logo" />
                </Link>
            </div>

        </footer>
    )
}