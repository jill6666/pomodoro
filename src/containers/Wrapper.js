import React from 'react';
import TodoList from '../components/TodoList';
import Timer from '../components/Timer';

class Wrapper extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        currentTask: null,
      };
      this.updateTask = this.updateTask.bind(this);
    }

    updateTask(todo) {
      this.setState({
        currentTask: todo,
      })
    }

    render() {
      const { currentTask } = this.state;
      const { updateTask } = this;
      return (
        <div className="ui equal height stackable grid">
          <div className="eight wide column" style={{background:'yellow'}}>
            <Timer showTask={currentTask}/>
          </div>
          <div className="eight wide column">
            <TodoList updateTask={updateTask}/>
          </div>
        </div>
      );
    }
}

export default Wrapper
