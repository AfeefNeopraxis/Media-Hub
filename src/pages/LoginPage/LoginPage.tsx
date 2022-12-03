import { auth } from "../../helpers/firebase_utils";

import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login example</h1>
      <p>Use the bellow button to login to your account using gooogle</p>
      <button
        onClick={() => {
          signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
            // The user is authenticated now,
            // So we can redirect them back to thier prefered route
            navigate("/");
          });
        }}
      >
        Click me to login
      </button>
    </div>
  );
};

export default Login;
