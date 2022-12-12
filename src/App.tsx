import Card from "./components/Common/Card";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Login from "./pages/LoginPage/LoginPage";
import { auth } from "./helpers/firebase_utils";
import OrganizationProfile from "./pages/OrganizationProfilePage";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading loading from app...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!user) {
    return (
      <div className="w-full h-full bg-[#F2EBE1] p-10">
        <Card>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Card>
      </div>
    );
  }
  // This line only reaches when the user is logged in.

  // Now the time to check if the user have a organization or not.
  // Prompt the user to create or join an organization

  return <OrganizationProfile />;
}

export default App;
