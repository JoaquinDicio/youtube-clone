import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { AppContextProvider } from '../context/AppContext'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
  const {categories} = useContext(AppContextProvider)
  return (
    <Container className='p-3 bg-white sidebar shadow-sm d-lg-flex d-none flex-column'>
       {categories.map((category)=>
       <SidebarItem key={category.id} name={category.name}/>)}
    </Container>
  )
}
