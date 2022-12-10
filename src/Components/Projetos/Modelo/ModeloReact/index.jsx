import ModeloProjeto from ".."

export default function ModeloProjetosReact(){
    
    const dietaArray = [
        'vite',
    ]

    const cepArray = [
        'vite',
        'axios',
        'react-icons'
    ]

    const corticoArray = [
        'vite',
        'react-router-dom'
    ]

    const esgotosArray = [
        'react-icons',
        'react-router-dom'
    ]

    const imc1Array = [
        'npm'
    ]

    const imc2Array = [
        'vite'
    ]

    return(
        <div>
            <h1 className="tituloProjetos">Projetos React</h1>
            <ModeloProjeto
                imagem="/imagens/dietaa.png"
                react_icons=''
                titulo="Dieta"
                subtitulo="Calcule seus calórico basal e diário, IMC, ingestão de água e +"
                pacotes={dietaArray}
                link="https://dieta-nu.vercel.app"
            />
            <ModeloProjeto
                imagem="/imagens/pesquisa.png"
                react_icons=''
                titulo="Busque seu CEP"
                subtitulo="Digite o CEP desejado e encontre os dados de sua localização"
                pacotes={cepArray}
                link="https://buscar-cep-kappa.vercel.app"
            />
            <ModeloProjeto
                imagem="/imagens/cortico.png"
                react_icons=''
                titulo="O Cortiço"
                subtitulo="Trabalho de escola com intuito de mostrar sobre a obra O Cortiço do estritor brasileiro Aluísio de Azevedo"
                pacotes={corticoArray}
                link="https://cortico.vercel.app"
            />
            <ModeloProjeto
                imagem="/imagens/esgotos.png"
                react_icons=''
                titulo="Esgotos"
                subtitulo="Trabalho de escola com intuito de mostrar sobre o funcionamento dos tratamentos de esgotos"
                pacotes={esgotosArray}
                link="https://esgotos.vercel.app"
            />
            <ModeloProjeto
                imagem="/imagens/imc1.png"
                react_icons=''
                titulo="IMC 1.0"
                subtitulo="Calcule seu Indice de massa corporal, primeira versão"
                pacotes={imc1Array}
                link="https://imc-fhcq.vercel.app"
            />
            <ModeloProjeto
                imagem="/imagens/imc2.png"
                react_icons=''
                titulo="IMC 1.1"
                subtitulo="Calcule seu Indice de massa corporal, segunda versão"
                pacotes={imc2Array}
                link="https://indice-massa-corporal.vercel.app"
            />
        </div>
    )
}