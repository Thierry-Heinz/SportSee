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
import Loader from "../../components/Loader";

/**
 *
 * Display the User Dashboard
 * @component
 * @param {number} userID from Url params ( from react-router)
 * @return {ReactElement} the Dashboard page made of several components
 */

export default function Dashboard() {
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(
    "Veuillez patienter pendant que nous récupérons vos données"
  );
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
    setIsLoading(true);
    fetchData()
      .then((res) => {
        setUserData(res);
        setMsg("Félicitation ! Vous avez explosé vos objectifs hier 👏");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setMsg(
          "Désolé, nous rencontrons des problèmes avec nos serveurs, veuillez réessayer plus tard."
        );
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
            subTitle={msg}
          />
          {!isLoading ? (
            <ChartsWrapper>
              <ChartsRow
                area={{
                  rowStart: 1,
                  rowEnd: 1,
                  colStart: 1,
                  colEnd: 2,
                }}
              >
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
              </ChartsRow>
              <ChartsRow
                area={{
                  rowStart: 2,
                  rowEnd: 2,
                  colStart: 1,
                  colEnd: 2,
                }}
              >
                <Linechart
                  data={userData.userAverageSessions}
                  colors={{
                    tooltipColor: colors.black,
                    lineColor: colors.white,
                    backgroundColor: colors.primary,
                  }}
                />
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
              </ChartsRow>
              <Keyinfos
                area={{
                  rowStart: 1,
                  rowEnd: 2,
                  colStart: 3,
                  colEnd: 3,
                }}
              >
                {userData.keyDatas.map((infoCard, i) => (
                  <KeyInfoCard
                    key={`${i}-${infoCard.name}`}
                    infoCard={infoCard}
                  />
                ))}
              </Keyinfos>
            </ChartsWrapper>
          ) : (
            <Loader />
          )}
        </UserDashboard>
      </Main>
    </StyledDashboardWrapper>
  );
}
