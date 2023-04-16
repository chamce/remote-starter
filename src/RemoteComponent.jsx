import * as React from "react";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

const requires = createRequires({ react: React });

const RemoteComponent = createRemoteComponent({ requires });

export default RemoteComponent;
