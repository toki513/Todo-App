import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import TodoCard from "./components/TodoCard"

function App() {
  let todos = ['Go to the GYM',
  'Eat more FRUITS',
  'Stay HEALTHY'
]
  return (
    <>
      <TodoInput />
      <TodoList todos = {todos} />
     
    </>
  )
}

export default App
