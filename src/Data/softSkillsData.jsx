import { FaHandRock } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BiHappyBeaming } from 'react-icons/bi'
import { GiThink } from 'react-icons/gi'
import { GiBrain } from 'react-icons/gi'
import { FaRunning } from 'react-icons/fa'

const criatividade = <GiBrain/>
const empatia = <AiFillHeart/>
const carisma = <BiHappyBeaming/>
const observacao = <AiFillEye/>
const esforco = <FaHandRock/>
const curiosidade = <GiThink/>
const proatividade = <FaRunning/>

export const softSkillsArray = [
    {
        name:'criatividade',
        soft:criatividade,
    },
    {
        name:'proatividade',
        soft:proatividade
    },
    {
        name:'curiosidade',
        soft:curiosidade
    },
    {
        name:'esforço',
        soft:esforco
    },
    {
        name:'observação',
        soft:observacao
    },
    {
        name:'carisma',
        soft:carisma
    },
    {
        name:'empatia',
        soft:empatia
    }
]
