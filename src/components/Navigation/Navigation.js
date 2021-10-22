import { NavLink as RouterNavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <RouterNavLink className="link" exact to="/tabledata">
      Main
    </RouterNavLink>
  );
};
export default Navigation;
