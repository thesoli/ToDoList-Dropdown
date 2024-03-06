import axios from "axios";
import { useState } from "react";
import EditListItem from "./EditListItem";
import ListItem from "./ListItem";

const Map = ({ todos, completedHandler, updateDelete, fetchData }) => {
  const [editingTodo, setEditingTodo] = useState(false);

  const onSubmit = (values) => {
    editTask(values);
    setEditingTodo(false);
  };

  const editTask = (values) => {
    axios
      .put("http://localhost:8000/todos/" + values.id, {
        id: values.id,
        title: values.title,
        owner: values.owner,
        location: values.location,
        completed: false,
        edited: false,
      })
      .then(function (response) {
        fetchData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (editingTodo) {
    return (
      <EditListItem
        onSubmit={onSubmit}
        completedHandler={completedHandler}
        updateDelete={updateDelete}
        todos={todos}/>
    );
  } else {
    return (
      <ListItem
        completedHandler={completedHandler}
        updateDelete={updateDelete}
        todos={todos}
        setEditingTodo={setEditingTodo}/>
    );
  }
};

export default Map;
