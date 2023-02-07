import { Aside, IconButtonsWrapper, CopyRight } from "./style.js";
import IconButton from "../IconButton/IconButton.jsx";

import BodyBuilding from "../../assets/bodybuilding.svg";
import Cycling from "../../assets/cycling.svg";
import Meditation from "../../assets/meditation.svg";
import Swimming from "../../assets/swimming.svg";

const services = [
  { name: "Meditation", icon: Meditation },
  { name: "Swimming", icon: Swimming },
  { name: "Cycling", icon: Cycling },
  { name: "Body Building", icon: BodyBuilding },
];

export default function Sidebar({ sideBarWidth }) {
  return (
    <Aside sideBarWidth={sideBarWidth}>
      <IconButtonsWrapper>
        {services.map((service, i) => (
          <IconButton
            key={`${i}-${service.name}`}
            iconSrc={service.icon}
            name={service.name}
          />
        ))}
      </IconButtonsWrapper>
      <CopyRight>
        <div className="rotate">Copiryght, SportSee 2020</div>
      </CopyRight>
    </Aside>
  );
}
