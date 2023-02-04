import React from 'react'

export default function SidebarItem({name, id}) {
  return (
    <div className='sidebar-item d-flex align-items-center'>
        <p className='w-100 m-0 p-2'>{name}</p>
    </div>
  )
}
