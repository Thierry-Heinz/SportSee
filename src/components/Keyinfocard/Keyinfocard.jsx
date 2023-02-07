import { InfoCard } from "./style";

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
