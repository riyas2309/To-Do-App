import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
