import Modelo from "../../Modelo";

export default function YouNews(){
    return(
        <div>
            <Modelo
                urlImg='/public/imagens/YN.png'
                titulo='YouNews'
                subtitulo='Crie suas notícias e ganhe por isso'
                urlProjeto='https://you-news-bay.vercel.app'
            />
        </div>
    )
}