import { SiTypescript } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiGit } from 'react-icons/di'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiMysql } from 'react-icons/si'

const hmtlEmoji = <AiFillHtml5/>
const cssEmoji = <DiCss3/>
const jsEmoji = <DiJavascript1/>
const reactEmoji = <FaReact/>
const tsEmoji = <SiTypescript/>
const pythonEmoji = <FaPython/>
const nodeEmoji = <IoLogoNodejs/>
const gitEmoji = <DiGit/>
const gitHubEmoji = <AiOutlineGithub/>
const mySqlEmoji = <SiMysql/>
 
export const hardSkillsArray = [
    {
        name:'html',
        hard:hmtlEmoji,
        level:'a'
    },
    {
        name:'css',
        hard:cssEmoji,
        level:'a'
    },
    {
        name:'java script',
        hard:jsEmoji,
        level:'b'
    },
    {
        name:'react.js',
        hard:reactEmoji,
        level:'c'
    },
    {
        name:'node.js',
        hard:nodeEmoji,
        level:'d'
    },
    {
        name:'type script',
        hard:tsEmoji,
        level:'b'
    },
    {
        name:'python',
        hard:pythonEmoji,
        level:'c'
    },
    {
        name:'git',
        hard:gitEmoji,
        level:'d'
    },
    {
        name:'git hub',
        hard:gitHubEmoji,
        level:'c'
    },
    {
        name:'my sql',
        hard:mySqlEmoji,
        level:'d'
    }
    
]
