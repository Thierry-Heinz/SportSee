import { useEffect, useState } from "react";
import { useParams } from "react-router";

import UserData from "../../utils/Modelisation";
import colors from "../../utils/colors";
import { StyledDashboard, Main, Section, Charts, Keyinfos } from "./Style";

// import Layout
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

//import Components
import Userheader from "../../components/Userheader";
import Keyinfocard from "../../components/Keyinfocard";
import Barchart from "../../components/Barchart";
import Linechart from "../../components/Linechart";
import Radarchart from "../../components/Radarchart";
import Radialbarchart from "../../components/Radialbarchart";

/**
 * @params {number} userID from Url params (react-router)
 * @returns {HTMLElement} the Dashboard page made of several components
 */

export default function Dashboard() {
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    firstName: "",
    keyDatas: [],
    userPerformances: [],
    userAverageSessions: [],
    userActivity: [],
    userScore: [{ value: 0 }],
  });

  const fetchData = async () => {
    const userData = new UserData(userId);
    const firstName = await userData.firstName;
    const keyDatas = await userData.keyDatas;
    const userPerformances = await userData.userPerformance;
    const userScore = await userData.userScore;
    const userAverageSessions = await userData.userAverageSessions;
    const userActivity = await userData.userActivity;

    return {
      firstName: firstName,
      keyDatas: keyDatas,
      userPerformances: userPerformances,
      userScore: userScore,
      userAverageSessions: userAverageSessions,
      userActivity: userActivity,
    };
  };

  useEffect(() => {
    fetchData().then((res) => {
      setUserData(res);
    });
  }, []);

  return (
    <StyledDashboard>
      <Navbar />
      <Sidebar />
      <Main>
        <Userheader
          title={`Bonjour ${userData.firstName}`}
          subTitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
        <Section>
          <Charts>
            <Barchart
              data={userData.userActivity}
              colors={{
                dataKey1Color: colors.darkgrey,
                dataKey2Color: colors.primary,
                titleColor: colors.darkgrey2,
                textColor: colors.mediumgrey,
                backgroundColor: colors.lightgrey,
              }}
            />
            <Linechart data={userData.userAverageSessions} />
            <Radarchart
              colors={{
                textColor: colors.white,
                lineColor: colors.white,
                styleBackgroundColor: colors.darkgrey,
                areaColor: colors.primary,
              }}
              data={userData.userPerformances}
            />
            <Radialbarchart data={userData.userScore} />
          </Charts>
          <Keyinfos>
            {userData.keyDatas.map((infoCard, i) => (
              <Keyinfocard key={`${i}-${infoCard.name}`} infoCard={infoCard} />
            ))}
          </Keyinfos>
        </Section>
      </Main>
    </StyledDashboard>
  );
}
