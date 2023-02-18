import { SiTypescript } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'

const hmtlEmoji = <AiFillHtml5/>
const cssEmoji = <DiCss3/>
const jsEmoji = <DiJavascript1/>
const reactEmoji = <FaReact/>
const tsEmoji = <SiTypescript/>
const pythonEmoji = <FaPython/>
const nodeEmoji = <IoLogoNodejs/>

export const hardSkillsArray = [
    {
        name:'html',
        hard:hmtlEmoji,
    },
    {
        name:'css',
        hard:cssEmoji
    },
    {
        name:'java script',
        hard:jsEmoji
    },
    {
        name:'react.js',
        hard:reactEmoji
    },
    {
        name:'node.js',
        hard:nodeEmoji
    },
    {
        name:'type script',
        hard:tsEmoji
    },
    {
        name:'python',
        hard:pythonEmoji
    },
    
]
