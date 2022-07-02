import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './index.css';
import ErrorPage from './Pages/error';
import Home from './Pages/home';
import Product from './Pages/product';
import Products from './Pages/products';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/products"> products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Foooter </div>
    </Router>
  );
}
export default App;
