import "./App.css";
import { Card } from "./components/Card";
import { WrapperRemote } from "./components/WrapperRemote";

function App() {
  return (
    <WrapperRemote>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </WrapperRemote>
  );
}

export default App;
