import React from 'react'

export default function TodoCard(props) {
  const { children } = props
  return (
    <li className='todoItem' >
        {children}
      <div className='actionContainer'>
      <i className=" fa-solid fa-user-pen"></i>
      <i className="fa-solid fa-trash-can-arrow-up"></i>
      </div>
                     
                </li>
  )
}
