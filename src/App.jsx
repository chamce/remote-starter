import * as React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import HelloWorld from "./components/entry";

import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

const requires = createRequires({ react: React });

const RemoteComponent = createRemoteComponent({ requires });

const HelloRemote = () => <RemoteComponent url="main.cjs" name="Remote" />;

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Remote Component Starter using Vite</h1>
      <div className="card">
        <HelloWorld />
        <HelloRemote />
        <p>
          If you see a 404 error above, you have not built your remote component
          yet!
        </p>
        <p>
          Run <code>yarn build</code> and restart dev server to view remote
          component
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
