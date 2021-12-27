import React,{useEffect,useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import ClearIcon from '@mui/icons-material/Clear';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';
const TodoForm = ({onCreate,onUpdate,updateTodoItem,onClear}) => {
    const [showClear, setShowClear] = useState(false)
    const inputRef = useRef()
    useEffect(() => {
        if(updateTodoItem?.todo) {
          setShowClear(true)
            if(inputRef.current){
                inputRef.current.value = updateTodoItem.todo.text
            }
        }
    }, [updateTodoItem])

    const onClearForm = () => {
      inputRef.current.value = ''
      onClear()
      setShowClear(false)
    }

    const onChangeInput = () => {
      if(inputRef?.current?.value?.length > 0 || updateTodoItem?.todo?.id) {
        console.log("inputRef?.current?.value?.length > 0 || updateTodoItem?.todo?.id",inputRef?.current?.value?.length > 0 || updateTodoItem?.todo?.id)
        setShowClear(true)
      }
      else{
        setShowClear(false)
      }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          let text = event.target.value
          if(text.length > 0){
            let todo = {
                text: text,
                lastModified: new Date().toLocaleString()
            }
            if(updateTodoItem?.index >=0) {
              todo.id = updateTodoItem.todo.id
              onUpdate(updateTodoItem.index,todo)
            }
            else {
              todo.id = uuidv4()
              onCreate(todo)
            }
            event.target.value = ''
            setShowClear(false)
          }

        }
      }

    return (
        <Paper
          component="div"
          sx={{ width: '100%',boxSizing: 'border-box' }}
        >
          <Box sx={{ p: '8px 8px', width: '100%',boxSizing: 'border-box' }}>
            <Typography component="h6" variant="h6"> {updateTodoItem?.index >= 0 ? 'UPDATE TODO' : 'CREATE NEW TODO'}  </Typography>
          </Box>
          <Box sx={{ p: '8px 8px', display: 'flex', alignItems: 'center', width: '100%',boxSizing: 'border-box' }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Type todo and hit enter"
              inputProps={{ 'aria-label': 'search google maps' }}
              onKeyDown={handleKeyDown}
              inputRef={inputRef}
              onChange={onChangeInput}
            />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={onClearForm}>
              {showClear ? <ClearIcon /> : <DirectionsIcon />}
            </IconButton>
          </Box>
        </Paper>
      );
}
TodoForm.propTypes = {
    updateTodoItem: PropTypes.object,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onClear: PropTypes.func
}

export default TodoForm
