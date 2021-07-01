import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { AddTodoFrom } from './AddTodoForm';

const initialTodos: Todo[]=[
  {
    text: 'Levar cachorro para passear',
    complete: false,
  },
  {
    text: 'Criar um app',
    complete: true,
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo =>{
      if (todo === selectedTodo){
        return {
          ... todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text:string) => {
    const newTodo = {text, complete:false}
    setTodos([...todos, newTodo])
  }

  return (
    <ul>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoFrom addTodo={addTodo} />
    </ul>
  );
}

export default App;
