// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// pages
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<HomePage />}></Route>

          {/* Login */}
          <Route exact path="/search" element={<SearchPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
