import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Principal from './1_Principal';

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal/>}/>
            </Routes>
        </Router>
    )
}