import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/authContext";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Login from "./Components/Login";
import ProfileMain from "./Components/ProfileMain";
import "./App.css";

export const API_URL = "https://linked-in-backend-production.up.railway.app"; // CHANGE THIS DEPENDING ON DEPLOYMENT OR LOCAL TESTING NEEDS

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<ProfileMain />} path="/profile" exact />
      </Route>
      <Route element={<Login />} path="/login" />
      <Route element={<Login />} path="/" />
    </Routes>
  );
}

export default App;
