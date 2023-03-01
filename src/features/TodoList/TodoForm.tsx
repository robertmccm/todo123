import Button from '@mui/material/Button';
import { Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import {connect} from 'react-redux';
import {FormEvent, useState} from 'react';
import {Dispatch} from 'redux';

function TodoForm({dispatch}: {dispatch: Dispatch}) {
  const [todoText, setTodoText] = useState('');
  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    setTodoText((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: FormEvent) => {
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