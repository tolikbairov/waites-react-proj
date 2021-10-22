import { Switch, Route } from "react-router";
import { Container } from "reactstrap";
import UserDetailsView from "../views/UserDetailsView";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import Navigation from "./Navigation/Navigation";

export default function App() {
  return (
    <>
      <Container fluid={true}>
        <Navigation></Navigation>
        <Switch>
          <Route path="/tabledata" exact>
            <MainPage></MainPage>
          </Route>
          <Route path="/tabledata/:userId" component={UserDetailsView}></Route>
        </Switch>
      </Container>
    </>
  );
}
