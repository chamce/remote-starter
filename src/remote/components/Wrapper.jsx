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
          rel="shortcut icon"
          href="https://chamce.github.io/eku-favicons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://chamce.github.io/eku-favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://chamce.github.io/eku-favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://chamce.github.io/eku-favicons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://chamce.github.io/eku-favicons/manifest.json"
        />
        <link
          rel="mask-icon"
          href="https://chamce.github.io/eku-favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
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
