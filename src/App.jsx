import "./App.css";
import { Card } from "./components/Card";
import { RemoteContainer } from "./components/RemoteContainer";

function App() {
  return (
    <>
      <RemoteContainer>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
        </div>
      </RemoteContainer>
    </>
  );
}

export default App;
