import './Modelo.css'

export default function ModeloProjeto(props){
    return(
        <div className='modeloContent'>

            <div className="subModeloContent">

                <div className="imgContent">
                    <img src={props.imagem} alt={props.descricao} />
                </div>

                <div className="titulosContent">
                    <h2>{props.titulo}</h2>
                    <span>{props.subtitulo}</span>
                </div>

                <h3>Node Packages usados no projeto: </h3>
                
                <ul className='listaNPM'>
                    {props.pacotes.map(itens => 
                        <li>{itens}</li>
                    )}
                </ul>

                <a target='_blank' href={props.link}>Clique e saiba mais</a>

            </div>

            <hr className='linha'/>

        </div>
    )
}