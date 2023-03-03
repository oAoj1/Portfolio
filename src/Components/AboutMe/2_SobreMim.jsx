import Fade from 'react-reveal/Fade';
import './2_SobreMim.css'
import {useState} from 'react'

export default function SobreMim(){
    const sobreMimFiltro = [
        'Biografia',
        'Cursos',
        'Expêriencia'
    ]

    function filtrarSobreMimClique(sobreMim){
        setFiltroSobreMim(sobreMim)
    }

    const [filtroSobreMim,setFiltroSobreMim] = useState()
    const filtragem = projetosContent.filter((project) => project.name.includes(filtro))

    return(
        <div className="sobreMimContent">
            <Fade left>
                <h1>Sobre mim</h1>
            </Fade>

            <div className="sobreMimfilterContent">
                <h3>Busque por: </h3>

                {sobreMimFiltro.map((itens,index) => (
                    <button 
                        className='botoesFiltragem'
                        key={index} 
                        onClick={() => filtrarSobreMimClique(itens)}
                    >
                        <span>
                            {itens}    
                        </span> 
                    </button> 
                    
                ))}

            </div>
            
            <div className="textoContent">
                <Fade right>
                    <p>Meu nome é <strong>João Gabriel</strong> e desde pequeno sempre fui fascinado pela tecnologia e jogos eletrônicos. </p>

                    <p>Em <strong>2017</strong> tive meu primeiro contato com o mundo dos códigos, estudei <strong>Python</strong>, mas não dei continuidade.</p>

                    <p>No meio de <strong>2020</strong> em plena pandemia comecei a estudar <strong >HTML</strong> e <strong>CSS</strong>, e a partir desse instante me apaixonei pela programação ,porém ,mantive por alguns meses criando pequenos sites e parando os estudos.</p>

                    <p>No ano de <strong>2022</strong> voltei definitivamente, me aprimorei em HTML e CSS, aprendi sobre <strong>JavaScript</strong> e <strong>React</strong>, me aprofundei um pouco mais em <strong>Python</strong>. </p>

                    <p>Em 2023 entrei de cabeça conhecendo ainda mais sobre <strong>TypeScript e Node.JS</strong> e desenvolvimento <strong>back-end</strong> </p>

                    <p>Meu objetivo é aprimorar minhas <strong>habilidades</strong>  com as linguagens e futuramente criar meu próprio <strong>negócio</strong> no mundo da tecnologia. Trabalhar <strong>remotamente</strong> para alguma empresa seja nacional ou internacional também se inclui nos meus objetivos</p>
                </Fade>
                    
            </div>

        </div>
    )
}