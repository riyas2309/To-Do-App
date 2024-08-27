import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Tasks from "./Pages/Tasks";
import { Toaster } from "react-hot-toast";

function App() {
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
