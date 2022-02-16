import { withRouter } from "react-router-dom";
import { useAuth } from "../customhooks";

//if user is not logged in, redirect to homepage
const WithAuth = (props) => useAuth(props) && props.children;

export default withRouter(WithAuth);
