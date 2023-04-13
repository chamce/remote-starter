import * as React from "react";
import "./App.css";

import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";
import { Card } from "./components/Card";

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
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </WrapperRemote>
  );
}

export default App;
