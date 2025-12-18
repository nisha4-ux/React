import { Link } from "react-router-dom"; // Import Link for routing
import "./Auth.css"; // Same CSS used for styling

function Signup() {
  return (
    <div className="auth-container">
      <h1>Signup 🌸</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account?{" "}
        {/* When clicked, it goes to Login page */}
        <Link to="/login" className="switch-link">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
