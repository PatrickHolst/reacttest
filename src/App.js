import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemón Search</h1>
      <h2 className="title">Search for a Pokemón</h2>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bulbausar</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
