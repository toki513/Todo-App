import React from 'react'

export default function TodoList() {

    let todos = ['Go to the GYM',
                'Eat more FRUITS',
                'Stay HEALTHY'
    ]
  return (
    <ul className='main'>
        {
            todos.map((todo,todoIndex)=>{
                return <li className='todoItem' key={todoIndex}>{todo}</li>
            })
        }
    </ul>
   
  )
}
