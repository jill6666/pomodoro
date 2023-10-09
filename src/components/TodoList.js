import React from 'react';
import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, content: 'Clean Dishes' },
                { id: 2, content: 'Buy Groceries' },
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.chooseItem = this.chooseItem.bind(this);
    }

    deleteItem(id) {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos
        })
    }

    addItem(todo) {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
    }

    chooseItem(todo) {
        this.props.updateTask(todo);
    }

    render() {
        const { todos } = this.state;
        const { deleteItem, addItem, chooseItem } = this;
        return (
            <div style={{padding:'2rem 1rem'}}>
                <AddTodo addItem={addItem}/>
                <TodoListItem todos={todos} deleteItem={deleteItem} chooseItem={chooseItem}/>
            </div>
        );
    }
}

export default TodoList
