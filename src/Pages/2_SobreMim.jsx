import Fade from 'react-reveal/Fade';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/2_SobreMim.css'
import '../Components/Section/Section.css'


export default function SobreMim(){
    return(
        <div>
            <Header/>
                <div className="sobreMimContent">
                    <Fade left>
                        <h1>Sobre mim</h1>
                    </Fade>
                    
                    <div className="textoContent">
                        <Fade right>
                            <p>Meu nome é <strong className='joao'>João Gabriel</strong> e desde pequeno sempre fui fascinado pela tecnologia e jogos eletrônicos. </p>

                            <p>Em <strong>2017</strong> tive meu primeiro contato com o mundo dos códigos, <strong className='python'>Python</strong>, mas não dei continuidade.</p>

                            <p>No meio de <strong>2020</strong> comecei a estudar <strong className='html'>HTML</strong> e <strong className='css'>CSS</strong> e a partir desse instante me apaixonei pela programação, mantive apenas por alguns meses criando pequenos sites então parei os estudos.</p>

                            <p>No ano de <strong>2022</strong> voltei definitivamente, me aprimorei em <strong className='html'>HTML</strong> e <strong className='css'>CSS</strong>, aprendi sobre <strong className='js'>JavaScript</strong> e <strong className='react'>React</strong>, me aprofundei um pouco mais em <strong className='python'>Python</strong> e tive um breve experiência com <strong className='ts'>TypeScript</strong> e <strong className='node'>Node.JS</strong>. </p>

                            <p>Busco minha primeira vaga como <strong>desenvolvedor Front-end web</strong> , cujo objetivo é ter conhecimento de como funciona uma StartUp ou uma empresa e explorar ainda mais minha criatividade e aprimorar minha lógica. Futuramente pretendo me tornar <strong>Full-stack.</strong> </p>
                        </Fade>
                         
                    </div>

                </div>
            <Footer/>
        </div>
    )
}