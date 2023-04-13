import * as React from "react";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

const requires = createRequires({ react: React });

const RemoteComponent = createRemoteComponent({ requires });

export const WrapperRemote = ({ children }) => (
  <RemoteComponent
    url="https://raw.githubusercontent.com/chamce/remote-starter/master/dist/main.cjs"
    children={children}
  />
);
