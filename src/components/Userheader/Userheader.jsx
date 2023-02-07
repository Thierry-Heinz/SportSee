import { Header, Title, SubTitle } from "./style.js";

export default function UserHeader({ title, titleColor, subTitle }) {
  return (
    <Header>
      <Title firstNameColor={titleColor}>
        Bonjour <span>{title}</span>
      </Title>
      <SubTitle>{subTitle}</SubTitle>
    </Header>
  );
}
