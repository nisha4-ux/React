import { Link } from "react-router-dom"; // Import Link for routing
import "./Auth.css"; // Import CSS to style this page

function Login() {
  return (
    <div className="auth-container">
      <h1>Login 🌸</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter password" />

        {/* Button that looks like login but actual navigation is with Link below */}
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        {/* When clicked, it goes to Signup page */}
        <Link to="/signup" className="switch-link">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
