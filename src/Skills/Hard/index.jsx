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
            </div>

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
                            <span key={hard.name}>
                                {[hard.name , hard.hard]}
                            </span>
                            <span key={hard.name}>
                                {hard.level}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    )
}