import Reacts from '../Components/Projetos/Reacts'
import Cursos from '../Components/Projetos/Cursos'
import Repositorios from '../Components/Projetos/Repositorios'

const reactContent = <Reacts></Reacts>
const coursesContent = <Cursos></Cursos>
const repositoriesContent = <Repositorios></Repositorios>

export const projetosContent = [
    {
        name:'react',
        project:reactContent
    },
    {
        name:'cursos',
        project:coursesContent
    },
    {
        name:'repositorios',
        project:repositoriesContent
    }
]