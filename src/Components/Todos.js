import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle = {
    minHeight: "61vh"
  }

  return (
    <div className='container' style={myStyle}>
      <h3 className=''>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to Display" : props.todos.map((todo) => {
        return (
        <TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno} />
        )
      })}

    </div>
  )
}

export default Todos
