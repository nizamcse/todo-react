import { useState ,useEffect} from 'react';
import {Container,Box} from '@mui/material';
import TodoForm from "./components/TodoForm";
import TodoLists from './components/TodoLists';

const App = () => {
  const [todos, setTodos] = useState([])
  const [updateTodoItem, setUpdateTodoItem] = useState(null)

  useEffect(() => {
    let data = localStorage.getItem("_todos") || null
    setTodos(data ? JSON.parse(data) : [])
  }, [])

  const saveOnLocalStorage = (items) => {
    localStorage.setItem("_todos",JSON.stringify(items))
  }
  
  const onClear = () => {
    setUpdateTodoItem(null)
  }

  const onDelete = (index) => {
    let items = todos.slice()
    items.splice(index, 1); 
    setTodos(items)
    saveOnLocalStorage(items)
  }

  const onUpdate = (index,todo) => {
    let items = todos.slice()
    items.splice(index, 1); 
    items.unshift(todo);
    setTodos(items)
    setUpdateTodoItem(null)
    saveOnLocalStorage(items)
  }


  const onEdit = (index) => {
    let item = {
      index: index,
      todo: todos[index]
    }
    setUpdateTodoItem(item)
  }

  const onCreate = (item) => {
    let items = todos.slice()
    items.unshift(item); 
    setTodos(items)
    saveOnLocalStorage(items)
  }


  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box mt={4}>
          <TodoForm 
            onCreate={onCreate} 
            updateTodoItem={updateTodoItem}
            onUpdate={onUpdate} 
            onClear={onClear}
          />
        </Box>
        <Box mt={4}>
          <TodoLists onDelete={onDelete} onEdit={onEdit} todos={todos} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
