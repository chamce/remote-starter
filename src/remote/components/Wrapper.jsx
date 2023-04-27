import { useRef } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import wrapperStyles from "../styles/Wrapper.css?inline";
import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css?inline";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ColorPicker } from "./ColorPicker";

const styles = bootstrapStyles + wrapperStyles;

export const Wrapper = ({ children }) => {
  const footerRef = useRef();

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <Header>
        <ColorPicker footerRef={footerRef} />
      </Header>
      <div className="container">
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
      <Footer footerRef={footerRef} />
    </>
  );
};
