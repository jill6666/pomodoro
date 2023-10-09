import React from 'react';
import Finish from '../finish.svg';

const TodoListItem = ({todos, deleteItem, chooseItem}) => {

  const todoItems = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo item" style={{padding:'10px 0px'}} key={todo.id} onClick={() => {chooseItem(todo.content)}}>
          <div className="right floated content">
            <button className="ui big icon button" style={{background:'none', color:'black'}} onClick={() => {deleteItem(todo.id)}}>
              <i className="trash alternate outline icon"></i>
            </button>
          </div>
          <div className="middle aligned content">
            <h2 style={{lineHeight:2}}>{todo.content}</h2>
          </div>
        </div>
      )
    })
  ) : (
    <div className="ui placeholder segment center aligned" style={{background:'none', border:'0px', boxShadow:'none'}}>
      <img src={Finish} className="ui centered small image" alt="finish"/>
      <h2>Yay! You don't have any todo task left!</h2>
    </div>
  )

  return (
    <div className="ui big divided list">
      {todoItems}
    </div>
  ) 
}

export default TodoListItem