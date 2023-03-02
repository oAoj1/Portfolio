import { FaHandRock } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BiHappyBeaming } from 'react-icons/bi'
import { GiThink } from 'react-icons/gi'
import { GiBrain } from 'react-icons/gi'
import { FaRunning } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import { GiBookshelf } from 'react-icons/gi'

const criatividade = <GiBrain/>
const empatia = <AiFillHeart/>
const carisma = <BiHappyBeaming/>
const observacao = <AiFillEye/>
const esforco = <FaHandRock/>
const curiosidade = <GiThink/>
const proatividade = <FaRunning/>
const autodidatica = <GiRead/>
const organizacao = <GiBookshelf/>

export const softSkillsArray = [
    {
        name:'criatividade',
        soft:criatividade,
        level:'s'
    },
    {
        name:'proatividade',
        soft:proatividade,
        level:'b'
    },
    {
        name:'auto didática',
        soft:autodidatica,
        level:'b'
    },
    {
        name:'organização',
        soft:organizacao,
        level:'b'
    },
    {
        name:'curiosidade',
        soft:curiosidade,
        level:'b'
    },
    {
        name:'esforço',
        soft:esforco,
        level:'b'
    },
    {
        name:'observação',
        soft:observacao,
        level:'s'
    },
    {
        name:'carisma',
        soft:carisma,
        level:'s'
    },
    {
        name:'empatia',
        soft:empatia,
        level:'a'
    }
]
