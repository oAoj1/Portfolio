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
            <ModeloProjeto
                imagem="/imagens/organo.png"
                react_icons=''
                titulo="Organograma"
                subtitulo="Projeto criado do curso de React da Alura, organize seu organograma"
                pacotes={organoArray}
            />
            <ModeloProjeto
                imagem=''
                react_icons={<BsClockFill/>}
                titulo="Cronometre seus estudos"
                subtitulo="Projeto criado do curso de React TypeScript da Alura, organize seu organograma"
                pacotes={estudosArray}
            />
        </div>
    )
}