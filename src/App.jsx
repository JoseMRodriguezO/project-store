import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/Shop-context";
import "bootstrap/dist/css/bootstrap.css";
import { SignIn } from "./pages/signin/SignIn";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
