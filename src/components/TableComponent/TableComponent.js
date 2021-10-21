// import { Component } from "react";
import { Table } from "reactstrap";
function TableComponent(props) {
  const todos = props.todos;
  return (
    <Table dark>
      <thead>
        <tr>
          <th>id</th>
          <th>user id</th>
          <th>Title</th>
          <th>Completed</th>
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
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
export default TableComponent;
