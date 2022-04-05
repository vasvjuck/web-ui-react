import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import CatalogPage from './components/Pages/CatalogPage';
import CartPage from './components/Pages/CartPage';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;