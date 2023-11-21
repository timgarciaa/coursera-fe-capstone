import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservation />} />
    </Routes>
  );
}
