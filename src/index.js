import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

ReactDOM.render(
  <BrowserRouter basename="/waites-react-proj">
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
