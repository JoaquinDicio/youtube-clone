import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/react.svg'

export default function Navbar() {
  const [input,setInput] = useState('')
  return (
    <Container fluid className='navbar shadow-sm bg-white d-flex align-items-center justify-content-between p-4'>
        <img src={logo} alt="logo-image"/>
        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Search something' className='w-50'/>
    </Container>
  )
}
