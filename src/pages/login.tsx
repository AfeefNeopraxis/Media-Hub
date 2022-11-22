import {
  signInWithGoogle,
  signInWithGooglePopup,
} from "../helpers/firebase_utils";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login example</h1>
      <p>Use the bellow button to login to your account using gooogle</p>
      <button onClick={signInWithGoogle}>Click me to login</button>
    </div>
  );
};

export default Login;
