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
import { Toaster } from "react-hot-toast";
import { useAuth } from "../src/Contexts/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
