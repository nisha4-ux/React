
import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  return (
    <div>Home
     {/* Navbar created inside Home page */}
      <nav className="navbar">
        <h2 className="logo">MyApp</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="home-content">
        <h1>Welcome to Home Page 🌸</h1>
        <p>This is a beautiful gradient navbar made using React Router.</p>
      </div>
</div>
  );
}

export default Home;