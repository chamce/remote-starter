import RemoteComponent from "../RemoteComponent";

export const Wrapper = ({ children }) => (
  <RemoteComponent url="wrapper.cjs" children={children} />
);
