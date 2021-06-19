import {useDispatch, useSelector} from "react-redux";
import {deleteTodos} from "../Actions/actions";
import {useState} from "react";


function Content(props){

    const users=useSelector((state)=>state.users);

    const user=users.filter(item=>{
        if(item.id===props.todo.userId){

            return true;
        }

        return false;
    })

    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        dispatch(deleteTodos(id))
    }


      return (<div>
                <div className="sroka_sost">
                    <div className="item_id">{props.todo.id}</div>
                    <div className="item_title">{props.todo.title}</div>
                    <div className="item_name">{user[0].name}</div>
                    <button className="item_delete" onClick={()=>{handleDelete(props.todo.id)}}>Delete</button>
                </div>
              </div>)



}

export  default Content;