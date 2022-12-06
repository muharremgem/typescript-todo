import React from "react";

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
}

const TodoListItem: React.FC<IListItem> = ({ item, toggleTodo }) => {
  return (
    <li>
      {item.isDone ? (
        <p className="checked" onClick={() => toggleTodo(item)}>
          {" "}
          {item.task}{" "}
        </p>
      ) : (
        <p onClick={() => toggleTodo(item)}> {item.task} </p>
      )}
      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
