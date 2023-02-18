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
                        key={hard.name}
                    >
                        <span>{[hard.name , hard.hard]}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}