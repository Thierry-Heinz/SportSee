import styled from "styled-components";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const color = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
  return `${color.r},${color.g},${color.b}`;
}

const InfoCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 32px;
  gap: 24px;
  background-color: #fbfbfb;
  border-radius: 5px;
  & .icon {
    border-radius: 6px;
    background-color: rgba(${(props) => hexToRgb(props.backgroundColor)}, 10%);
    // opacity: 10%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 15px;
    }
  }
`;

export default function Keyinfocard({ infoCard }) {
  return (
    <InfoCard backgroundColor={infoCard.color}>
      <div className="icon">
        <img src={infoCard.icon} alt="" />
      </div>
      <header>
        <h2>{`${infoCard.value}${infoCard.unit}`}</h2>
        <h3>{infoCard.name}</h3>
      </header>
    </InfoCard>
  );
}
