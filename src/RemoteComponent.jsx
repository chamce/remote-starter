import * as React from "react";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

const requires = createRequires({ react: React });

export const RemoteComponent = createRemoteComponent({ requires });
