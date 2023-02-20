import { hardSkillsArray } from "../../Data/hardSkillsData"
import { motion } from 'framer-motion'
import './HardSkills.css'
import { useRef,useState,useEffect } from "react"

export default function HardSkills(){

    const hardSkillsContent = useRef()
    const [width,setWidth] = useState(0)

    useEffect(() => {
        const larguraVisivel = hardSkillsContent.current?.scrollWidth
        const larguraTotal = hardSkillsContent.current?.offsetWidth

        setWidth(larguraVisivel - larguraTotal)
    },[])

    return(
        <div>
            <div className="hardSkills">
                <h2> <i>Hard Skills</i> </h2>
                <p>Veja tecnologias em que possuo um <span className='verde'>breve conhecimento</span>, outras que <span className='amarelo'>estou estudando</span> e algumas que também já tive contato <span className='vermelho'>poucas vezes</span> </p>

                <div className="levelContent">
                    <h4>Sublinhados de: </h4>
                    <ul>
                        <li> <span className='verde'>Verde:</span> Possuo um breve conhecimento da tecnologia</li>
                        <li> <span className='amarelo'>Amarelo:</span> Estou estudando a tecnologia no momento</li>
                        <li> <span className='vermelho'>Vermelho:</span>  Já tive um contato com a tecnologia, porém pouca expêriencia</li>
                    </ul>
                </div>
                                            
            </div>

            <h5 className="segureArrasteTexto">Segure e arraste</h5>

            <motion.div 
                className="hardSkillsContainer" 
                ref={hardSkillsContent}
            >
                <motion.ul
                    className='hardSkillsContent'
                    whileTap={{cursor:'grabbing'}}
                    drag='x'
                    dragConstraints={{right:0,left:-width}}
                >
                    {hardSkillsArray.map(hard => (
                        <motion.li 
                            className="hardSkillsProjects" 
                        >
                            <span key={hard.name}>{[hard.name , hard.hard]}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    )
}