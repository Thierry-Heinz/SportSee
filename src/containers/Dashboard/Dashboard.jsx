import { useEffect, useState } from "react";
import { useParams } from "react-router";

// import Data handling and adapter
import ApiCall from "../../utils/Service";
import colors from "../../utils/colors";

// import stylized Components from style.js
import {
  StyledDashboardWrapper,
  UserDashboard,
  Main,
  Section,
  ChartsWrapper,
  ChartsRow,
  Keyinfos,
} from "./style";

// import Layout Components
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

//import Specific User Components
import Userheader from "../../components/Userheader";
import KeyInfoCard from "../../components/KeyInfoCard";
import Barchart from "../../components/Barchart";
import Linechart from "../../components/Linechart";
import Radarchart from "../../components/Radarchart";
import Radialbarchart from "../../components/Radialbarchart";

/**
 *
 * Display the User Dashboard
 * @component
 * @param {number} userID from Url params ( from react-router)
 * @return {ReactElement} the Dashboard page made of several components
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
    const userData = new ApiCall(userId);
    const firstName = await userData.firstName;
    const keyDatas = await userData.keyDatas;
    const userScore = await userData.userScore;
    const userPerformances = await userData.userPerformance;
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

  const navBarHeight = 91;
  const sideBarWidth = 117;

  return (
    <StyledDashboardWrapper>
      <Navbar navBarHeight={navBarHeight} />
      <Main navBarHeight={navBarHeight}>
        <Sidebar sideBarWidth={sideBarWidth} />

        <UserDashboard sideBarWidth={sideBarWidth}>
          <Userheader
            title={userData.firstName}
            titleColor={colors.primary}
            subTitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
          />
          <Section>
            <ChartsWrapper>
              <Barchart
                sizes={{
                  minWidth: 839,
                  minHeight: 320,
                  maxWidth: 1400,
                  maxHeight: 500,
                }}
                data={userData.userActivity}
                colors={{
                  dataKey1Color: colors.darkgrey,
                  dataKey2Color: colors.primary,
                  titleColor: colors.darkgrey2,
                  textColor: colors.mediumgrey,
                  backgroundColor: colors.lightgrey,
                }}
              />
              <ChartsRow>
                <Linechart
                  sizes={{
                    minWidth: 258,
                    minHeight: 263,
                    maxWidth: 1400,
                    maxHeight: 500,
                  }}
                  data={userData.userAverageSessions}
                  colors={{
                    tooltipColor: colors.black,
                    lineColor: colors.white,
                    backgroundColor: colors.primary,
                  }}
                />
                <Radarchart
                  sizes={{
                    minWidth: 258,
                    minHeight: 263,
                    maxWidth: 1400,
                    maxHeight: 500,
                  }}
                  colors={{
                    textColor: colors.white,
                    lineColor: colors.white,
                    styleBackgroundColor: colors.darkgrey,
                    areaColor: colors.primary,
                  }}
                  data={userData.userPerformances}
                />
                <Radialbarchart
                  data={userData.userScore}
                  sizes={{
                    minWidth: 258,
                    minHeight: 263,
                    maxWidth: 1400,
                    maxHeight: 500,
                  }}
                />
              </ChartsRow>
            </ChartsWrapper>
            <Keyinfos>
              {userData.keyDatas.map((infoCard, i) => (
                <KeyInfoCard
                  key={`${i}-${infoCard.name}`}
                  infoCard={infoCard}
                />
              ))}
            </Keyinfos>
          </Section>
        </UserDashboard>
      </Main>
    </StyledDashboardWrapper>
  );
}
