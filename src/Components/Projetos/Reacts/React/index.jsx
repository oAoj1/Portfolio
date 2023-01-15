import './React.css'
import { FaReact } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import { projetosReactData } from '../../../../Data/projetosReactData'
import { motion } from 'framer-motion'
import { useState,useEffect,useRef } from 'react';

export default function Reacts(){

    const reactsContainer = useRef()
    const [width,setWidth] = useState(0)

    useEffect(() => {
        const larguraVisivel = reactsContainer.current?.scrollWidth
        const larguraTotal = reactsContainer.current?.offsetWidth

        setWidth(larguraVisivel-larguraTotal)
    },[])

    return(
        <motion.div className='reactsContainer' ref={reactsContainer}>
            <Fade left>
                <hr className='linha'/>

                <div className="reactTitle">
                    <h2>React</h2><FaReact/>
                </div> 
                <div className="reactGrab">
                    <span>Segure e arraste para ver os projetos</span>
                </div>

                <motion.div 
                    className="reactContent"
                    whileTap={{cursor:'grabbing'}}
                    drag='x'
                    dragConstraints={{right:0, left: -width}}
                >
                    {projetosReactData.map(react => (
                        <motion.div className='reactProjects' key={react.name}>
                            <span>{react.project}</span> 
                        </motion.div>
                    ))}
                </motion.div>        
            </Fade>
        </motion.div>
    )
}