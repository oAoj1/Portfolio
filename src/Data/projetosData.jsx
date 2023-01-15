import Reacts from '../Components/Projetos/Reacts/React'
import Cursos from '../Components/Projetos/Cursos/Curso'
import Repositorios from '../Components/Projetos/Repositorios/Respositorio'

const reactContent = <Reacts/>
const coursesContent = <Cursos/>
const repositoriesContent = <Repositorios/>

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
