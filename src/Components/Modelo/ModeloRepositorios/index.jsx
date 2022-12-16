import ModeloProjeto from "../Projetos/Modelo"

export default function ModeloProjetosRepositorios(){
    const repoArray = [
        'nao utilizado'
    ]

    return(
        <div>
            <h1 className="tituloProjetos">Projetos Repositorios (Github)</h1>
            <ModeloProjeto
                imagem="/imagens/dietaa.png"
                react_icons=''
                titulo="JavaScript"
                subtitulo="Projetos feitos com HTML,CSS e JavaScript"
                pacotes={repoArray}
                link="https://github.com/oAoj1/Projetos-JavaScript"
            />
            <ModeloProjeto
                imagem="/imagens/dietaa.png"
                react_icons=''
                titulo="Escola"
                subtitulo="Projetos feitos em site para serem apresentados na escola"
                pacotes={repoArray}
                link="https://github.com/oAoj1/Trabalhos-de-escola"
            />
        </div>
    )
}