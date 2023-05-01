import "bootstrap/dist/js/bootstrap.bundle.min";
import wrapperStyles from "../styles/Wrapper.css?raw";
import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css?raw";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";

const styles = bootstrapStyles + wrapperStyles;

export const Wrapper = ({ children }) => {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <Header />
      <Content>{children}</Content>
      <Footer />
      <Sidebar />
    </>
  );
};
