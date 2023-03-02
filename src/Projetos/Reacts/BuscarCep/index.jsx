import Modelo from "../../Modelo";

export default function BuscarCep(){
    return(
        <div>
            <Modelo
                urlImg='/imagens/cep.png'
                titulo='Buscar Cep'
                subtitulo='Busque seu endereço colocando seu cep'
                urlProjeto='https://buscar-cep-kappa.vercel.app'
                urlGitHub='https://github.com/oAoj1/buscar-cep'
            />
        </div>
    )
}