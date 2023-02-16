import Modelisation from "./Modelisation";

/**
 *
 * Api: a class that fetch the data and adapt it (by using the Modelisation Class) fro later use
 *
 */

export default class Api {
  /**
   * @param {number} userId
   * @param {url} from Api url .env REACT_APP_BASE_URL
   */
  constructor(userId) {
    this._userId = userId;
    this._baseURL = process.env.REACT_APP_BASE_URL;
    this.Modelisation = new Modelisation();
    this.userData = this.getUserData();
    this.firstName = this.getFirstName();
    this.keyDatas = this.getKeyDatas();
    this.userScore = this.getUserScore();
    this.userPerformance = this.getUserPerformance();
    this.userAverageSessions = this.getUserAverageSessions();
    this.userActivity = this.getUserActivity();
  }

  /**
   * Private method fetching the data
   *
   * @param {string} endpoint
   * @returns {promise} a Promise containing that will contain the data object
   *
   */
  _fetchJSON(endpoint) {
    let baseUrlRequest = `${this._baseURL}/${this._userId}`;
    let urlRequest = endpoint
      ? `${baseUrlRequest}/${endpoint}`
      : `${baseUrlRequest}`;

    const apiResponse = fetch(urlRequest)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        // Do something with the response
        return responseJson;
      })
      .catch((error) => {
        console.log(error);
      });

    return apiResponse;
  }

  /**
   * An Async func. that retrieve the primary User data
   * @return {object} userData
   */
  async getUserData() {
    const response = await this._fetchJSON();

    const userData = {
      firstName: response.data.userInfos.firstName,
      keyDatas: this.Modelisation.adaptKeyData(response.data.keyData),
      userScore: this.Modelisation.adaptUserScore(
        response.data.todayScore || response.data.score
      ),
    };
    return userData;
  }

  /**
   * An Async func. that retrieve the firstname of the User
   * @return {string} userData
   */
  async getFirstName() {
    const userData = await this.userData;
    return userData.firstName;
  }

  /**
   * An Async func. that retrieve the key datas (for InfoCard) of the User
   * @return {array} keyDatas
   */
  async getKeyDatas() {
    const userData = await this.userData;
    return userData.keyDatas;
  }

  /**
   * An Async func. that retrieve the score (for Radialbarchart) of the User
   * @return {array} userScore
   */
  async getUserScore() {
    const userData = await this.userData;
    return userData.userScore;
  }

  /**
   * An Async func. that retrieve the  average sessions (for Linechart) of the User
   * @return {array} average sessions
   */
  async getUserAverageSessions() {
    const response = await this._fetchJSON("average-sessions");
    return this.Modelisation.adaptUserAverageSessions(response.data.sessions);
  }

  /**
   * An Async func. that retrieve the activity (for Barchart) of the User
   * @return {array} user activity
   */
  async getUserActivity() {
    const response = await this._fetchJSON("activity");
    return this.Modelisation.adaptUserActivity(response.data.sessions);
  }

  /**
   * An Async that retrieve the performances (for Radarchart) of the User
   * @return {array} user performances
   */
  async getUserPerformance() {
    const response = await this._fetchJSON("performance");
    return this.Modelisation.adaptUserPerformance(response.data.data);
  }
}
