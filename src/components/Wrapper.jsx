import { RemoteComponent } from "./RemoteComponent.jsx";

export const Wrapper = ({ children }) => (
  <RemoteComponent url="wrapper.cjs" children={children} />
);
