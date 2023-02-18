import './Repositorio.css'
import Fade from 'react-reveal/Fade';
import { RiGitRepositoryFill } from 'react-icons/ri'
import { motion } from 'framer-motion';
import { useState,useEffect,useRef } from 'react';
import { projetosRepositoriosData } from '../../../Data/projetosRepositoriosData'

export default function Repositorios(){

    const repositoriesContainer = useRef()
    const [width,setWidth] = useState(0)

    useEffect(() => {
        const larguraVisivel = repositoriesContainer.current?.scrollWidth
        const larguraTotal = repositoriesContainer.current?.offsetWidth

        setWidth(larguraVisivel - larguraTotal)
    },[])

    return(
        <motion.div className="repositoriesContainer" ref={repositoriesContainer}>
            <Fade left>
                <hr className='linha'/>

                <div className="repositoriesTitle">
                    <h2>Repositórios GitHub</h2><RiGitRepositoryFill/>
                </div>

                <div className="repositoriesGrab">
                    <span>Segure e arraste para ver os projetos</span>
                </div>

                <motion.div 
                    className="repositoriesContent"
                    whileTap={{cursor:'grabbing'}}
                    drag='x'
                    dragConstraints={{right:0,left:-width}}
                >
                    {projetosRepositoriosData.map(repositorios => (
                        <div className="repositoriesProject" key={repositorios.name}>
                            <span>{repositorios.project}</span>
                        </div>
                    ))}
                </motion.div>
            </Fade>
        </motion.div>
    )
}