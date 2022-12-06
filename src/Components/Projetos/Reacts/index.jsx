import '../Projetos.css'
import { FaReact } from 'react-icons/fa'

export default function Reacts(){

    return(
        <div>
            <div className="reactContent">

                <hr className='linha'/>

                    <div className="reactTitle">
                        <h2>React</h2><FaReact/>
                    </div>

                    <div className="contentOne">
                        <div className="innerProjectsContent">
                            <img src="/imagens/esgotos.png" alt="esgotos" />
                            <h3>Esgotos</h3>
                            <span>Saiba como funciona os tratamentos de esgotos</span>
                            <a target="_blank" href="https://esgotos.vercel.app">Clique aqui</a>
                        </div>

                        <div className="innerProjectsContent">
                            <img src="/imagens/pesquisa.png" alt="buscar cep" />
                            <h3>Buscar CEP</h3>
                            <span>Encontre a sua localidade colocando seu CEP</span>
                            <a target="_blank" href="https://buscar-cep-kappa.vercel.app">Clique aqui</a>
                        </div>

                        <div className="innerProjectsContent">
                            <img src="/imagens/cortico.png" alt="cortico" />
                            <h3>Cortiço</h3>
                            <span>O Cortiço, uma das maiores obras de Aluíso de Azevedo</span>
                            <a target="_blank" href="https://cortico.vercel.app">Clique aqui</a>
                        </div>
                    </div>
                                          
                    <div className="contentTwo">
                        <div className="innerProjectsContent">
                            <img src="/imagens/dietaa.png" alt="dieta" />
                            <h3>Dieta</h3>
                            <span>Calcule seu gasto calorico diário, basal e outra coisas</span>
                            <a target="_blank" href="https://dieta-nu.vercel.app">Clique aqui</a>
                        </div>

                        <div className="innerProjectsContent">
                            <img src="/imagens/imc1.png" alt="cortico" />
                            <h3>IMC V. 1.0</h3>
                            <span>Calcule seu Indice de Massa Corporal</span>
                            <a target="_blank" href="https://imc-fhcq.vercel.app">Clique aqui</a>
                        </div>

                        <div className="innerProjectsContent">
                            <img src="/imagens/imc2.png" alt="cortico" />
                            <h3>IMC V. 1.1</h3>
                            <span>Calcule seu Indice de Massa Corporal</span>
                            <a target="_blank" href="https://indice-massa-corporal.vercel.app">Clique aqui</a>
                        </div> 
                    </div>
            </div>
        </div>
    )
}