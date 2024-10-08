import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Tasks from "./Pages/Tasks";
import Logout from "./Pages/Logout";
import ForgotPassword from "./Pages/ForgotPassword";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../src/Contexts/AuthContext";
import AddTask from "./Components/AddTask";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              !isAuthenticated ? <Login /> : <Navigate to="/tasks" replace />
            }
          />
          <Route
            path="/signup"
            element={
              !isAuthenticated ? <Signup /> : <Navigate to="/tasks" replace />
            }
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? <Login /> : <Navigate to="/tasks" replace />
            }
          />
          <Route
            path="/tasks"
            element={
              isAuthenticated ? <Tasks /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/add" element={<AddTask />} />
          <Route
            path="/forgotPassword"
            element={
              !isAuthenticated ? (
                <ForgotPassword />
              ) : (
                <Navigate to="/tasks" replace />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
