import colors from "./colors";

//Importing svg icon
import apple from "../assets/apple.svg";
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import cheeseburger from "../assets/cheeseburger.svg";

/**
 *
 * Modelisation: an adapter Class that transform data for each charts
 * @return {class} Modelisation class object
 *
 */

class Modelisation {
  /**
   * A method adapting the key info data
   * @param {object} dataObject
   * @return {array} keyDatas
   */
  adaptKeyData(dataObject) {
    const keyDatas = [];
    for (const data in dataObject) {
      const keyInfo = {};
      switch (data) {
        case "calorieCount":
          keyInfo.name = "Calories";
          keyInfo.value = dataObject[data].toLocaleString("en-US");
          keyInfo.unit = "kCal";
          keyInfo.color = colors.primary;
          keyInfo.icon = energy;
          break;
        case "proteinCount":
          keyInfo.name = "Proteines";
          keyInfo.value = dataObject[data];
          keyInfo.unit = "g";
          keyInfo.color = colors.blue;
          keyInfo.icon = chicken;
          break;
        case "carbohydrateCount":
          keyInfo.name = "Glucides";
          keyInfo.value = dataObject[data];
          keyInfo.unit = "g";
          keyInfo.color = colors.yellow;
          keyInfo.icon = apple;
          break;
        case "lipidCount":
          keyInfo.name = "Lipides";
          keyInfo.value = dataObject[data];
          keyInfo.unit = "g";
          keyInfo.color = colors.pink;
          keyInfo.icon = cheeseburger;
          break;

        default:
      }
      keyDatas.push(keyInfo);
    }
    return keyDatas;
  }

  /**
   * A method adapting the user performances info data
   * @param {array} dataObject
   * @return {array} userPerformances
   */
  adaptUserPerformance(dataObject) {
    const subjects = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];

    const userPerformances = [];
    dataObject.forEach((singleData) => {
      const data = {
        subject: subjects[singleData.kind - 1],
        A: parseInt(singleData.value),
        B: 220,
        fullMark: 220,
      };
      userPerformances.push(data);
    });
    return userPerformances.reverse();
  }

  /**
   * A method adapting the user score info data
   * @param {array} dataObject
   * @return {array} userScore
   */
  adaptUserScore(dataObject) {
    const userScore = [
      {
        name: "score",
        value: dataObject * 100,
        fill: colors.primary,
        max: 100,
      },
    ];
    return userScore;
  }

  /**
   * A method adapting the user average sessions info data
   * @param {array} dataObject
   * @return {array} userAverageSessions
   */
  adaptUserAverageSessions(dataObject) {
    const day = ["L", "M", "M", "J", "V", "S", "D"];
    const userAverageSessions = [];
    dataObject.forEach((singleData) => {
      const data = {
        day: day[singleData.day - 1],
        min: singleData.sessionLength,
      };
      userAverageSessions.push(data);
    });

    return userAverageSessions;
  }

  /**
   * A method adapting the user activity info data
   * @param {array} dataObject
   * @return {array} userAverageSessions
   */
  adaptUserActivity(dataObject) {
    const userActivity = [];

    dataObject.forEach((singleData) => {
      const data = {
        day: singleData.day.charAt(singleData.day.length - 1),
        kilogram: singleData.kilogram,
        calories: singleData.calories,
      };
      userActivity.push(data);
    });
    return userActivity;
  }
}

export default Modelisation;
