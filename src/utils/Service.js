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

    const apiResponse = fetch(urlRequest);
    return apiResponse;
  }

  /**
   * An Async func. that retrieve the primary User data
   * @return {object} userData
   */
  async getUserData() {
    const response = await this._fetchJSON();
    const data = await response.json();

    const userData = {
      firstName: data.data.userInfos.firstName,
      keyDatas: this.Modelisation.adaptKeyData(data.data.keyData),
      userScore: this.Modelisation.adaptUserScore(
        data.data.todayScore || data.data.score
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
    const data = await response.json();
    return this.Modelisation.adaptUserAverageSessions(data.data.sessions);
  }

  /**
   * An Async func. that retrieve the activity (for Barchart) of the User
   * @return {array} user activity
   */
  async getUserActivity() {
    const response = await this._fetchJSON("activity");
    const data = await response.json();

    return this.Modelisation.adaptUserActivity(data.data.sessions);
  }

  /**
   * An Async that retrieve the performances (for Radarchart) of the User
   * @return {array} user performances
   */
  async getUserPerformance() {
    const response = await this._fetchJSON("performance");
    const data = await response.json();
    return this.Modelisation.adaptUserPerformance(data.data.data);
  }
}
