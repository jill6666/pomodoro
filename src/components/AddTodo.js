import React from 'react';

class AddTodo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        content: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleKeyPressed = this.handleKeyPressed.bind(this);
    }

    handleChange(e) {
      const content = e.target.value;
      this.setState({
        content
      })
    }

    handleKeyPressed(e) {
      if(e.key === 'Enter') this.handleSubmit();
    }

    handleSubmit(e) {
      this.props.addItem(this.state);
      this.setState({
        content: ''
      })
    }
 
    render() {
      const { content } = this.state;
      const { handleChange, handleSubmit, handleKeyPressed } = this;
      return (
        <div className="ui big fluid action input">
          <input type="text" value={content} placeholder="Add new todo" onKeyPress={handleKeyPressed} onChange={handleChange}/>
          <button className="ui icon black button" onClick={handleSubmit}>
            <i className="plus icon"></i>
          </button>
        </div>
      );
    }
}

export default AddTodo
