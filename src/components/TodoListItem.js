import React from "react";

/**
 *
 * @description todo list item
 * @param {String[]} todos todo list
 * @param {Function} onDelete item on delete
 * @param {Function} onClick item be choosen
 * @returns
 */
const TodoListItem = ({ todos, onDelete, onClick }) => {
  const hasLength = Boolean(todos.length);
  const handleOnClick = (e, props) => {
    e.preventDefault();
    onClick && onClick(props);
  };

  return (
    <div className="ui big divided list">
      {!hasLength && (
        <div
          className="ui placeholder segment center aligned"
          style={{ background: "none", border: "0px", boxShadow: "none" }}
        >
          <img
            src="/images/finish.svg"
            className="ui centered small image"
            alt="finish"
          />
          <h2>Yay! You don't have any todo task left!</h2>
        </div>
      )}

      {hasLength && (
        <>
          {todos.map((todo) => {
            const { id, content } = todo || {};

            return (
              <div
                className="todo item"
                style={{ padding: "10px 0px" }}
                key={id}
                onClick={(e) => handleOnClick(e, content)}
              >
                <div className="right floated content">
                  <button
                    className="ui big icon button"
                    style={{ background: "none", color: "black" }}
                    onClick={() => onDelete(id)}
                  >
                    <i className="trash alternate outline icon"></i>
                  </button>
                </div>

                <div className="middle aligned content">
                  <h2 style={{ lineHeight: 2 }}>{content}</h2>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TodoListItem;
