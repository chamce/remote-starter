import "./App.css";
import { Card } from "./components/Card";
import { RemoteContainer } from "./components/RemoteContainer";

function App() {
  return (
    <RemoteContainer>
      {/* <div className="bd-example border-0">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {[...Array(10).keys()].map((x) => (
            <div key={x} className="col">
              <Card />
            </div>
          ))}
        </div>
      </div> */}
    </RemoteContainer>
  );
}

export default App;
