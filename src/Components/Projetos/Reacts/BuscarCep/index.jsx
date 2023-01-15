import Modelo from "../../Modelo";

export default function BuscarCep(){
    return(
        <div>
            <Modelo
                urlImg='/public/imagens/cep.png'
                titulo='Buscar Cep'
                subtitulo='Busque seu endereço colocando seu cep'
                urlProjeto='https://buscar-cep-kappa.vercel.app'
            />
        </div>
    )
}