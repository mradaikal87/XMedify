import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./page/home";
import Search from "./page/search";
import MyBookings from "./page/my-bookings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
