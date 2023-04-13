import * as React from "react";
import "./App.css";
// import reactLogo from "./assets/react.svg";
import Wrapper from "./components/entry";

import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

const requires = createRequires({ react: React });

const RemoteComponent = createRemoteComponent({ requires });

const WrapperRemote = ({ children }) => (
  <RemoteComponent url="main.cjs" children={children} />
);

function App() {
  return (
    <WrapperRemote>
      <h1>Let's hope this worked!</h1>
    </WrapperRemote>
  );
}

export default App;
