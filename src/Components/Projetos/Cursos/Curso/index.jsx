import './Curso.css'
import { GiBrain } from 'react-icons/gi'
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion'
import { useState,useEffect,useRef } from 'react';
import { projetosCursosData } from '../../../../Data/projetosCursosData';

export default function Cursos(){

    const coursesContainer = useRef()
    const [width,setWidth] = useState(0)

    useEffect(() => {
        const larguraVisivel = coursesContainer.current?.scrollWidth
        const larguraTotal = coursesContainer.current?.offsetWidth

        setWidth(larguraVisivel-larguraTotal)
    }, [])

    return(
        <motion.div className="coursesContainer" ref={coursesContainer}>
            <Fade right>
                <hr className='linha'/>

                <div className="coursesTitle">
                    <h2>Cursos</h2><GiBrain/>
                </div>
                <div className="coursesGrab">
                    <span>Segure e arraste para ver os projetos</span>
                </div>

                <motion.div 
                    className="coursesContent"
                    whileTap={{cursor:'grabbing'}}
                    drag='x'
                    dragConstraints={{right:0,left:-width}}
                >
                    {projetosCursosData.map(cursos => (
                        <div className="coursesProject" key={cursos.name}>
                            <span>{cursos.project}</span>
                        </div>
                        
                    ))}
                </motion.div>
            </Fade>
        </motion.div>
    )
}