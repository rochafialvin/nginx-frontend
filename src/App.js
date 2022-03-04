import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://172.105.115.129:2022/users");
        setUsers(data.data);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Thank you guys. Good luck further !!!!</p>
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
          <p key={user.id} style={{ marginBlock: 1, textAlign: "left" }}>
            id: {user.id}, name: {user.name}, email: {user.email}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
