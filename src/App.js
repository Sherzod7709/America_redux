import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import "./assets/scss/main.scss";
import SinglePage from "./pages/single-page/single-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/bbc/:id" element={<SinglePage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
