import { IconButton, ListItem } from "@mui/material";
import { useState } from "react";
import {TextField} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';

export default function TodoForm({addTodo}){
    const [text,setText] = useState("");
    const handleChange = (evt)=>{
        setText(evt.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(text);
        setText("");

    }
    return(
        <ListItem>
            <form onSubmit={handleSubmit}> 
            <TextField 
            id="outlined-basic" 
            label="Add To-do" 
            variant="outlined"
            onChange={handleChange}
            value = {text}
            InputProps = {{
                endAdornment:(
                <InputAdornment position="end">
                <IconButton edge="end" type="submit">
                    <CreateIcon/>
                </IconButton>
            </InputAdornment>)
            }}
            
            aria-describedby="outlined-pencil-helper-text"
          /> 
        </form>

        </ListItem>
    )
}