// import { Component } from "react";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Table, Button, ButtonGroup } from "reactstrap";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
function TableComponent(props) {
  const todos = props.todos;
  const [modal, setModal] = useState(false);
  const [deletemodal, setDeleteModal] = useState(false);
  const [todoId, setTodoId] = useState("1");
  // const [unmountOnClose, setUnmountOnClose] = useState(true);
  const { url } = useRouteMatch();
  const toggle = () => {
    setModal(!modal);
    console.log("toggle", modal);
  };
  const toggleDel = () => {
    setDeleteModal(!deletemodal);
    // console.log("toggle", modal);
  };
  return (
    <Table dark>
      <thead>
        <tr>
          <th>id</th>
          <th>user id</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos &&
          todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "true" : "false"}</td>
              <td>
                <ButtonGroup>
                  <Link
                    to={{
                      pathname: `${url}/${todo.id}`,
                      propsSearch: { title: todo.title },
                    }}
                  >
                    <Button color="primary">view</Button>
                  </Link>
                  <Button
                    color="primary"
                    onClick={() => {
                      setTodoId(todo.id);
                      toggle();
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      setTodoId(todo.id);
                      toggleDel();
                    }}
                  >
                    delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
      </tbody>
      <EditModal
        modal={modal}
        toggle={toggle}
        onEdit={props.onEdit}
        todoId={todoId}
      ></EditModal>
      <DeleteModal
        modal={deletemodal}
        toggle={toggleDel}
        onEdit={props.onEdit}
        todoId={todoId}
      ></DeleteModal>
    </Table>
  );
}
export default TableComponent;
