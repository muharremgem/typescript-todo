import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://638f2c854ddca317d7f08244.mockapi.io/todos";

interface TodoType {
  id: string | number;
  task: string;
  isDone: Boolean;
}

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
