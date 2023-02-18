import { softSkillsArray } from "../../Data/softSkillsData"
import { motion } from 'framer-motion'
import './SoftSkills.css'
import { useState,useEffect,useRef } from "react"

export default function SoftSkill(){

    const softSkillsContent = useRef()
    const [width,setWidth] = useState(0)

    useEffect(() => {
        const larguraVisivel = softSkillsContent.current?.scrollWidth
        const larguraTotal = softSkillsContent.current?.offsetWidth

        setWidth(larguraVisivel - larguraTotal)
    },[])

    return(
        <motion.div 
            className="softSkillsContainer"
            ref={softSkillsContent}
        >
            <h2> <i>Soft Skills</i> </h2>
            <motion.ul
                className='softSkillsContent'
                whileTap={{cursor:'grabbing'}}
                drag='x'
                dragConstraints={{right:0,left:-width}}
            >
                {softSkillsArray.map(softs =>(
                    <motion.li 
                        key={softs.name}
                        className="softSkillsProjects"
                    >
                        <span>{[softs.soft , softs.name]}</span> 
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}