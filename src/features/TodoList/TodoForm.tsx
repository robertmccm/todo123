import Button from '@mui/material/Button';
import { Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import {connect} from 'react-redux';
import {useState} from 'react';

function TodoForm({dispatch}) {
  const [todoText, setTodoText] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: {
      id: Math.random(),
      text: todoText,
      completed: false,
    }});
  };
  return (
    <Card>
      <CardContent>
        <TextField fullWidth id="new-todo" label="New Todo" variant="outlined" onChange={handleChange} />
        <Button onClick={handleSubmit}>Add Todo</Button>
      </CardContent>
    </Card>
  );
}

export default connect()(TodoForm);