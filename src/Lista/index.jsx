import './Lista.css'

export default function ListaProjetos(props){
    return(
        <div>
            <select
                value={props.valor}
                onChange={filtroProjeto => props.setFiltroProjeto(filtroProjeto.target.value)}>
                {props.itensProjetos.map((itens,index) => (
                    <option key={index}>
                        {itens}
                    </option>
                ))}
                <option value=""></option>
            </select>
        </div>
    )
}