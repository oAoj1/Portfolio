import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Principal from './1_Principal';
import SobreMim from "./2_SobreMim";
import Projetos from "./3_Projetos";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/sobremim" element={<SobreMim/>}/>
                <Route path="/projetos" element={<Projetos/>}/>
            </Routes>
        </Router>
    )
}