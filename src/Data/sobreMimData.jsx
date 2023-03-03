import Biografia from '../Components/AboutMe/Biografia'
import CursosFeitos from '../Components/AboutMe/CursosFeitos'
import Experiencia from '../Components/AboutMe/Experiencia'

const bio = <Biografia></Biografia>
const curs = <CursosFeitos></CursosFeitos>
const exp = <Experiencia></Experiencia>

export const sobreMimData = [
    {
        name:'Biografia',
        aboutme: bio
    },
    {
        name:'Cursos feitos',
        aboutme: curs
    },
    {
        name:'Experiência',
        aboutme: exp
    }
]