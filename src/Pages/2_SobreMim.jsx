import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/2_SobreMim.css'

export default function SobreMim(){
    return(
        <div>
            <Header/>
                <div className="sobreMimContent">
                    <h1>Sobre mim</h1>
                    <div className="textoContent">
                        <p>Meu nome é João Gabriel e desde pequeno sempre fui fascinado pela tecnologia e jogos eletrônicos. </p>

                        <p>Em 2017 tive meu primeiro contato com o mundo dos códigos, Python, mas não dei continuidade.</p>

                        <p>No meio de 2020 comecei a estudar HTML e CSS e a partir desse instante me apaixonei pela programação, mantive apenas por alguns meses criando pequenos sites então parei os estudos.</p>

                        <p>No ano de 2022 voltei definitivamente, me aprimorei em HTML e CSS, aprendi sobre JavaScript e React, me aprofundei um pouco mais em Python e tive um breve experiência com TypeScript e Node.JS.</p>

                        <p>Busco minha primeira vaga como Desenvolvedor Front-end web, cujo objetivo é ter conhecimento de como funciona uma StartUp ou uma empresa e explorar ainda mais minha criatividade e aprimorar minha lógica. Futuramente pretendo me tornar Full-stack.</p> 
                    </div>

                </div>
            <Footer/>
        </div>
    )
}