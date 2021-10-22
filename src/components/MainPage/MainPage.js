import React, { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from "./../TableComponent/TableComponent";
import PaginationComp from "./../Pagination/Pagination";
import { Form, FormGroup, Label, Input } from "reactstrap";
export default function App() {
  const [appState, setAppState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [sortType, setSortType] = useState("Todo Id");
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
    const getTodos = async () => {
      const res = await axios.get(apiUrl);
      console.log(res);
      const allTodos = res.data;
      console.log(allTodos);
      setAppState(allTodos);
    };
    getTodos();
  }, []);
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        "Todo Id": "id",
        "User Id": "userId",
        Title: "title",
        Completed: "completed",
      };

      const sortProp = types[type];

      let sorted = [];

      if (sortProp === "id" || sortProp === "userId")
        sorted = [...appState].sort((a, b) => {
          return a[sortProp] - b[sortProp];
        });
      else if (sortProp === "title") {
        sorted = [...appState].sort((a, b) => {
          let fa = a[sortProp].toLowerCase(),
            fb = b[sortProp].toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else if (sortProp === "completed") {
        sorted = [...appState].sort((a, b) => {
          let fa = a[sortProp].toString().toLowerCase(),
            fb = b[sortProp].toString().toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      }
      console.log(sorted);
      setAppState(sorted);
    };

    sortArray(sortType); // eslint-disable-next-line
  }, [sortType]);
  const lastTodoIndex = currentPage * todosPerPage;
  const firstTodoIndex = lastTodoIndex - todosPerPage;
  const currentTodos = appState.slice(firstTodoIndex, lastTodoIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const editTodo = (todoId, titleText) => {
    setAppState((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId
          ? { ...todo, title: todo.title + " " + titleText }
          : todo
      )
    );
  };
  return (
    <>
      <Form>
        <div className="d-flex justify-content-end">
          <FormGroup>
            <Label for="exampleSelect">select items per page</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={(e) => {
                setTodosPerPage(e.currentTarget.value);
                setCurrentPage(1);
              }}
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="sortItems">sort by</Label>
            <Input
              type="select"
              name="select"
              id="sortItems"
              onChange={(e) => {
                setSortType(e.currentTarget.value);
              }}
            >
              <option>Todo Id</option>
              <option>User Id</option>
              <option>Title</option>
              <option>Completed</option>
            </Input>
          </FormGroup>{" "}
        </div>
      </Form>
      <TableComponent todos={currentTodos} onEdit={editTodo}></TableComponent>
      <PaginationComp
        todosPerPage={todosPerPage}
        totalTodos={appState.length}
        paginate={paginate}
        currentPage={currentPage}
      ></PaginationComp>{" "}
    </>
  );
}
