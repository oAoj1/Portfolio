import '../Styles/3_Projetos.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ModeloProjetosReact from '../Components/Projetos/Modelo/ModeloReact'
import ModeloProjetosCursos from '../Components/Projetos/Modelo/ModeloCursos'
import ModeloProjetosRepositorios from '../Components/Projetos/Modelo/ModeloRepositorios'

export default function Projetos(){
    return(
        <div>
            <Header/>
                <div className="megaContentProjects">
                    <div className="tituloProjetosContent">
                        <h1>Projetos</h1>
                        <h2>Veja com mais detalhes como cada projeto pessoal foi feito e o que foi utilizado</h2>
                    </div>
                
                    <div className="descricaoProjetosContent">
                        <ModeloProjetosReact/>
                        <ModeloProjetosCursos/>
                        <ModeloProjetosRepositorios/>
                    </div>
                </div> 
            
            <Footer/>
        </div>
    )
}