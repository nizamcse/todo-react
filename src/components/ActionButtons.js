import React from 'react'
import {IconButton} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
const ActionButtons = ({onEdit,onDelete,index}) => {
    return (
        <div>
            <IconButton onClick={() => onEdit(index)} color="primary">
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(index)} color="error">
                <DeleteForeverIcon />
            </IconButton>
        </div>
    )
}

export default ActionButtons
