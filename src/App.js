import Header from "./Header/Header";
import Content from "./Content/Content";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteTodos, loadTodos, loadUsers} from "./Actions/actions";





function App() {
    const todos=useSelector(state=>state.todos);

    const loading=useSelector(state=>state.loading);
    const user_loading=useSelector((state)=>state.user_loading)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadTodos())
        dispatch(deleteTodos())
        dispatch(loadUsers())
    },[]);

  return (
    <div className="app">
       <Header/>
        {loading || user_loading ?'идет загрузка...': todos.map(todo=>{
            return (<Content  key={todo.id} todo={todo}/>)
        })}


    </div>
  );
}

export default App;
