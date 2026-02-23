import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseLine from '@mui/material/CssBaseLine';
import TodoList from './TodoList';
import TodoApp from './TodoApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp/>
      <TodoList />
    </>
  )
}

export default App
