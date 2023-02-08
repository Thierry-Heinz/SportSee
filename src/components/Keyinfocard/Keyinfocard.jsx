import PropTypes from "prop-types";
import { InfoCard } from "./style";

/**
 * Display Key info in a card on the dashboard
 * @component
 * @param {object} infocard
 * @return (<Keyinfocard infoCard={infoCard} />)
 */

export default function KeyInfoCard({ infoCard }) {
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

KeyInfoCard.propTypes = {
  infoCard: PropTypes.object.isRequired,
};
