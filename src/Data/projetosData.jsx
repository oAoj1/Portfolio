import Reacts from '../Projetos/Reacts/React'
import Cursos from '../Projetos/Cursos/Curso'
import Repositorios from '../Projetos/Repositorios/Respositorio'

const reactContent = <Reacts/>
const coursesContent = <Cursos/>
const repositoriesContent = <Repositorios/>

export const projetosContent = [
    {
        name:'React',
        project:reactContent
    },
    {
        name:'Cursos',
        project:coursesContent
    },
    {
        name:'Repositórios',
        project:repositoriesContent
    }
]
