import { Title } from "./Title";

export const Hello = ({ name = "World" }) => {
  return <Title>Hello {name}!</Title>;
};
