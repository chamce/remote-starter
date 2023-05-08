import "bootstrap/dist/js/bootstrap.bundle.min";
import wrapperStyles from "../styles/Wrapper.css?raw";
import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css?raw";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Helmet, HelmetProvider } from "react-helmet-async";

const styles = bootstrapStyles + wrapperStyles;

export const Wrapper = ({ children }) => {
  const fullscreenModalId = "fullscreenWindow";

  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <style jsx global>
        {styles}
      </style>
      <Header fullscreenModalId={fullscreenModalId} />
      <Content fullscreenModalId={fullscreenModalId}>{children}</Content>
      <Footer />
      <Sidebar />
    </HelmetProvider>
  );
};
