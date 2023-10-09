import React, { useState } from "react";

const AddTodo = ({ addItem }) => {
  const [content, setContent] = useState(null);

  const handleKeyPressed = (e) => {
    if (e.key === "Enter") handleOnSubmit();
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };
  const handleOnSubmit = () => {
    if (!content) return alert("Please input something to create a todo.");

    addItem && addItem(content);
    setContent(""); // reset
  };

  return (
    <div className="ui big fluid action input">
      <input
        type="text"
        value={content}
        placeholder="Add new todo"
        onKeyUp={handleKeyPressed}
        onChange={handleOnChange}
      />
      <button className="ui icon black button" onClick={handleOnSubmit}>
        <i className="plus icon"></i>
      </button>
    </div>
  );
};

export default AddTodo;
