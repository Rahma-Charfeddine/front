import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
