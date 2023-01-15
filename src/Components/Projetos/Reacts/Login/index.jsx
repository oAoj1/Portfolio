import Modelo from "../../Modelo";

export default function Login(){
    return(
        <div>
            <Modelo
                urlImg='/public/imagens/login.png'
                titulo='Login'
                subtitulo='Página de login para UI'
                urlProjeto='https://login-zeta-five.vercel.app'
            />
        </div>
    )
}