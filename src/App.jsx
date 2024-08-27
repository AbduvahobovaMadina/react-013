import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Wishlist from "./pages/wishlist/Wishlist";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Auth/>}>
          <Route path="" element={<Home/>}/>
        </Route>
          <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </>
  );
}

export default App;
