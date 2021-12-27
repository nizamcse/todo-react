import PropTypes from 'prop-types'
import {ListItem,ListItemText} from '@mui/material';
import ActionButtons from './ActionButtons';
const TodoListItem = ({item,onDelete,onEdit,index}) => {
    return (
        <div>
            <ListItem
            key={item.id}
            disableGutters
            secondaryAction={<ActionButtons index={index} onDelete={onDelete} onEdit={onEdit} /> }
            >
            <ListItemText primary={item.text} secondary={`Last Modified: ${item.lastModified}`}  />
            </ListItem>
        </div>
    )
}
TodoListItem.propTypes = {
    item: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    index: PropTypes.number
}
export default TodoListItem
