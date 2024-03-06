import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import AddForm from "./AddForm";
import Todos from "./Todos";

function ListItemDropdown({
  todos,
  fetchData,
  setTodos,
  completedHandler,
  updateDelete,
}) {
  return (
    <div>
      <Dropdown className="col">
        <Dropdown.Toggle variant="" id="dropdown" className="button-add">
          Add New Task
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div>
            <AddForm fetchData={fetchData} />
          </div>
          <div>
            <table>
              <span>
                {todos.map((todos) => {
                  return (
                    <Todos
                      key={todos.id}
                      fetchData={fetchData}
                      setTodos={setTodos}
                      completedHandler={completedHandler}
                      todos={todos}
                      updateDelete={updateDelete}
                    />
                  );
                })}
              </span>
            </table>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default ListItemDropdown;
