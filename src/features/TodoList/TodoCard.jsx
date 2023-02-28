import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { connect } from "react-redux";
import {toggleTodo, deleteTodo} from '@/store/actions';

function TodoCard({todo, dispatch}) {
    return (
            <Card key={todo.id}>
              <CardHeader title={todo.text} action={
                <span onClick={() => dispatch(deleteTodo(todo.id))}>🗑️</span>
              }/>
              <CardContent>
                <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.completed ? '✅' : '❌'}</span>
                {todo.text}
              </CardContent>
            </Card>
    );
}

export default connect()(TodoCard);