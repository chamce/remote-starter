import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

export const RemoteComponent = createRemoteComponent({
  requires: createRequires({ react: React, "react-dom": ReactDOM }),
});
