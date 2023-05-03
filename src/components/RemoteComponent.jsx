import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";

export const RemoteComponent = createRemoteComponent({
  requires: createRequires({ react: React, "react-dom": ReactDOM }),
});
