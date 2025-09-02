import React, { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      {/* Toggle */}
      <ul className="nav nav-pills mb-3 justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${mode === "login" ? "active" : ""}`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${mode === "signup" ? "active" : ""}`}
            onClick={() => setMode("signup")}
          >
            Signup
          </button>
        </li>
      </ul>

      {/* Card */}
      <div className="card shadow">
        <div className="card-body">
          {mode === "login" && (
            <form onSubmit={handleLogin}>
              <h3 className="text-center mb-4">Login</h3>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Login
              </button>
            </form>
          )}

          {mode === "signup" && (
            <form onSubmit={handleSignup}>
              <h3 className="text-center mb-4">Signup</h3>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-success w-100" type="submit">
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
