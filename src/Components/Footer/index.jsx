import './Footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

export default function Footer(){

    return(
        <footer>
            <Fade left>
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
            </Fade>
            
            <Fade right>
                <div className="logoContentF">
                    <img src="/imagens/jg.png" alt="logo" />
                </div>
            </Fade>

        </footer>
    )
}