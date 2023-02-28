import style from '@/styles/TodoList.module.css'
import  {connect} from 'react-redux';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';


function TodoList (props: any) {

  return (
    <>
      <div className={style.todoContainer}>
          {props.todos.map((todo: any) => (
            <TodoCard key={todo.id} todo={todo}/>
          ))}
          <TodoForm/>
      </div>

    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(TodoList);