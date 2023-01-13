export default function Modelo(props){
    return(
        <div>
            <img src={props.urlImg} alt="imagem" />
            <h3>{props.titulo}</h3>
            <span>{props.subtitulo}</span>
            <a target='_blank' href={props.urlProjeto}>Clique aqui</a>
        </div>
    )
}