import { useState } from 'react'
function App() {
  const [todo, setTodo] = useState([])
  const [newInput, setNewInput] = useState('')

  const addTodo = () => {
    setTodo(prev => [...prev, {
      title: newInput,
      id: Math.random() * 100,
    }])
    setNewInput('')
  }
  const deleteTodo = (id) => () => {
    setTodo(prev => prev.filter(todo => todo.id !== id))
  }
  return (
    <div>
    <h2>React todo</h2>
    <input type="text" value={newInput} onChange={(event) => setNewInput(event.target.value)} />
    <button onClick={addTodo}>+</button>
{todo?.map((todo, index) => <div>
  <span>{todo.title}</span>
  <button onClick={deleteTodo(todo.id)}>x</button>
</div>)}
    </div>
  )
}

export default App
