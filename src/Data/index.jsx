import Reacts from '../Components/Projetos/Reacts'
import Cursos from '../Components/Projetos/Cursos'
import Repositorios from '../Components/Projetos/Repositorios'

const reactContent = <Reacts></Reacts>
const coursesContent = <Cursos></Cursos>
const repositoriesContent = <Repositorios></Repositorios>

export const projetosContent = [
    {   
        name:'Reacts',
        project:reactContent
    },
    {   
        name:'Cursos',
        project:coursesContent
    },
    {
        name:'Repositorios',
        project:repositoriesContent
    }
]