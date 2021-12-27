import React from 'react'
import { Box, Paper,Typography } from '@mui/material'
import TodoListItem from './TodoListItem'

const TodoLists = ({todos,onEdit,onDelete}) => {
    return (
        <Paper
          component="div"
          sx={{ p: '8px 8px', width: '100%',boxSizing: 'border-box' }}
        >
            <Box mb={2} sx={{boxSizing: 'border-box'}}>
            {todos.length > 0 ? <Typography component="h6" variant="h6">List of Todos</Typography> : <Typography component="h6" variant="h6">No item on the list</Typography>}
            </Box>
            {todos.map((todo,index) => <TodoListItem key={`${todo.id}`} onDelete={onDelete} onEdit={onEdit} index={index} item={todo}  />)}
        </Paper>
    )
}

export default TodoLists
