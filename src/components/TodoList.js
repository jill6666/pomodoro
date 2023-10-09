import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import AddTodo from "./AddTodo";

const demoTodoList = [
  { id: 1, content: "Clean Dishes" },
  { id: 2, content: "Buy Groceries" },
];

const TodoList = ({ updateTask = () => {} }) => {
  const [todos, setTodos] = useState(demoTodoList);

  const onDelete = (id) => {
    const targetTodo = todos.filter((todo) => todo.id !== id);
    setTodos(targetTodo);
  };

  const onAddItem = (item) => {
    const id = Math.random();
    const newArr = [...todos, { content: item, id }];

    setTodos(newArr);
  };

  const onClick = (todo) => {
    updateTask && updateTask(todo);
  };

  return (
    <div style={{ padding: "2rem 1rem" }}>
      <AddTodo addItem={onAddItem} />
      <TodoListItem todos={todos} onDelete={onDelete} onClick={onClick} />
    </div>
  );
};

export default TodoList;
