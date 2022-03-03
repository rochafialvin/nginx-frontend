import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("http://localhost:2022/users");
      setUsers(data.data);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: 10 }}
        >
          Learn React
        </a>
        {users.map((user) => (
          <p style={{ marginBlock: 1, textAlign: "left" }}>
            id: {user.id}, name: {user.name}, email: {user.email}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
