import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Field } from "react-final-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const EditListItem = ({ fetchData }) => {
  const onSubmit = (values, form) => {
    addNewTask(values);
    form.reset();
  };

  const addNewTask = (values) => {
    axios
      .post("http://localhost:8000/todos", {
        id: uuidv4(),
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

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Must add a title!";
        }
        if (!values.owner) {
          errors.owner = "Must add a owner!";
        }
        if (!values.location) {
          errors.location = "Must add a location!";
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <tr className="list-item container align-items-center">
            <td className="list mx-5">
              <Field name="title">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="add a title..."
                      className="edit"
                    />
                    {meta.error && meta.submitting && (
                      <span className="error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </td>

            <td className="list mx-5">
              <Field name="owner">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="add a owner..."
                      className="edit"
                    />
                    {meta.error && meta.submitting && (
                      <span className="error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </td>

            <td className="list mx-5">
              <Field name="location">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="add a location..."
                      className="edit"
                    />
                    {meta.error && meta.submitting && (
                      <span className="error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </td>

            <button type="submit" className="button-edit task-button mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-floppy"
                viewBox="0 0 16 16"
              >
                <path d="M11 2H9v3h2z" />
                <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
              </svg>
            </button>
          </tr>
        </form>
      )}
    />
  );
};

export default EditListItem;
