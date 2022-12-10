import ModeloProjeto from ".."
import { BsClockFill } from 'react-icons/bs'

export default function ModeloProjetosCursos(){

    const organoArray = [
        'npm'
    ]

    const estudosArray = [
        'web-vitals',
        'sass',
        'typescript-plugin-css-modules'
    ]
    
    return(
        <div>
            <h1 className="tituloProjetos">Projetos cursos</h1>
            <ModeloProjeto
                imagem="/imagens/organo.png"
                react_icons=''
                titulo="Organograma"
                subtitulo="Projeto criado do curso de React da Alura, organize seu organograma colocando as pessoas fazer parte do seu time de tecnologia"
                pacotes={organoArray}
                link="https://organograma-alpha.vercel.app"
            />
            <ModeloProjeto
                imagem=''
                react_icons={<BsClockFill/>}
                titulo="Cronometre seus estudos"
                subtitulo="Projeto criado do curso de React TypeScript da Alura, cronometre o tempo do tema em que pretende estudar"
                pacotes={estudosArray}
                link="https://alura-studies-beige.vercel.app"
            />
        </div>
    )
}