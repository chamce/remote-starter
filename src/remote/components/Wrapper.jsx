import "bootstrap/dist/js/bootstrap.bundle.min";
import wrapperStyles from "../styles/Wrapper.css?inline";
import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css?inline";
import { Header } from "./Header";
import { Footer } from "./Footer";

const styles = bootstrapStyles + wrapperStyles;

export const Wrapper = ({ children }) => {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
