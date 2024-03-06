import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import ListItemDropdown from "./Components/ListItemDropdown";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8000/todos").then((response) => {
      setTodos(response.data);
      return response;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // delete
  const updateDelete = (id) => {
    deleteTask(id);
  };

  const deleteTask = (id) => {
    axios
      .delete("http://localhost:8000/todos/" + id)
      .then(function (response) {
        fetchData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //complete
  const completedHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="container">
      <div>
        <Header />
      </div>

      <div>
        <ListItemDropdown
          key={todos.id}
          todos={todos}
          fetchData={fetchData}
          setTodos={setTodos}
          completedHandler={completedHandler}
          updateDelete={updateDelete}
        />
      </div>
    </div>
  );
}

export default App;
