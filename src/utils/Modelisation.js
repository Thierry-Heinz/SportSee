import Api from "./Service";
import colors from "./colors";

//Importing svg icon
import apple from "../assets/apple.svg";
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import cheeseburger from "../assets/cheeseburger.svg";

/**
 * @param {id} id of the user
 * @returns {class} UserData object
 */

class UserData {
  constructor(id) {
    this.id = id;
    this.ApiCall = new Api(this.id);
    this.firstName = this.setFirstname();
    this.keyDatas = this.setKeyData();
    this.userPerformance = this.setUserPerformance();
    this.userScore = this.setUserScore();
    this.userAverageSessions = this.setUserAverageSessions();
    this.userActivity = this.setUserActivity();
  }

  async setFirstname() {
    const firstName = await this.ApiCall.getUserFirstName();
    return firstName;
  }

  async setKeyData() {
    const dataObject = await this.ApiCall.getKeyData();
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

  async setUserPerformance() {
    const dataObject = await this.ApiCall.getUserPerformance();
    const {
      data: { data },
    } = dataObject;

    const subjects = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];

    const userPerformances = [];
    data.forEach((singleData) => {
      const data = {
        category: subjects[singleData.kind - 1],
        value: singleData.value,
        fullMark: 220,
      };
      userPerformances.push(data);
    });
    return userPerformances.reverse();
  }

  async setUserScore() {
    const dataObject = await this.ApiCall.getUserScore();
    return dataObject * 100;
  }

  async setUserAverageSessions() {
    const dataObject = await this.ApiCall.getUserAverageSessions();

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

  async setUserActivity() {
    const dataObject = await this.ApiCall.getUserActivity();
    console.log(dataObject);
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

export default UserData;
