import Modelo from "../../Modelo";

export default function Organograma(){
    return(
        <div>
            <Modelo
                urlImg='/public/imagens/organo.png'
                titulo='Organograma'
                subtitulo='Ajuste sua equipe com organograma'
                urlProjeto='https://organograma-alpha.vercel.app'
            />
        </div>
    )
}