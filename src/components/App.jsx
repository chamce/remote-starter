import "../styles/App.css";
import { Card } from "./Card";
import { Wrapper } from "../remote/components/Wrapper";

export const App = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
};
