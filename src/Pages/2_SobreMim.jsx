import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/2_SobreMim.css'

export default function SobreMim(){
    return(
        <div>
            <Header/>
                <div className="sobreMimContent">
                    <h1>Sobre mim</h1>
                    <p></p>
                </div>
            <Footer/>
        </div>
    )
}