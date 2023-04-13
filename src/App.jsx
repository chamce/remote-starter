import * as React from "react";
import "./App.css";

import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

const requires = createRequires({ react: React });

const RemoteComponent = createRemoteComponent({ requires });

const WrapperRemote = ({ children }) => (
  <RemoteComponent
    url="https://raw.githubusercontent.com/chamce/remote-starter/master/dist/main.cjs"
    children={children}
  />
);

function App() {
  return (
    <WrapperRemote>
      <h1>Let's hope this worked!</h1>
    </WrapperRemote>
  );
}

export default App;
