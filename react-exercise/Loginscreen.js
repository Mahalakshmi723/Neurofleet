import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setMessage("Please enter Username and Password");
      return;
    }

    // Dummy login validation
    if (username === "admin" && password === "1234") {
      setMessage("✅ Login Successful");
    } else {
      setMessage("❌ Invalid Username or Password");
    }
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login Screen</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <div>
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>

          <button onClick={handleClear} style={styles.clearBtn}>
            Clear
          </button>
        </div>

        <p>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e3f2fd",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray",
    textAlign: "center",
  },
  input: {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "200px",
  },
  button: {
    padding: "10px",
    marginRight: "10px",
    background: "#1976d2",
    color: "white",
    border: "none",
  },
  clearBtn: {
    padding: "10px",
    background: "gray",
    color: "white",
    border: "none",
  },
};

export default App;
