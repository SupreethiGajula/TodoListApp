import { useState,useEffect } from "react"
import List from '@mui/material/List';
import TodoItem from './TodoItem'
import TodoForm from "./TodoForm";
import { Box } from "@mui/material";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    return data;
}

export default function TodoList(){
    const [todos,setTodos] = useState(getInitialData);
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const removeTodo = (id) => {
    setTodos(prevTodos => {
        return prevTodos.filter(t => t.id !== id);
        });
    };

    const toggleTodo = (id) =>{
        setTodos(prevTodos =>{
            return prevTodos.map((todo) =>{
                if(todo.id === id){
                    return { ...todo,completed:!todo.completed};
                }else{
                    return todo;
                }
            })
        })
    }
    
    const addTodo = (text) =>{
        setTodos(prevTodos => {
            return [...prevTodos,{id:crypto.randomUUID(),text:text,completed:false}];
        });
    }


    return (
        <Box sx={{ display: 'flex',justifyContent: 'center',padding:6}}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {todos.map((todo) => (
        <TodoItem todo = {todo} key = {todo.id} remove = {removeTodo} toggle = {toggleTodo}/>
    ))}
    <TodoForm addTodo = {addTodo}/>
    </List>
    </Box>
    )
}