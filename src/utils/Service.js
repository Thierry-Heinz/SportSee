import Modelisation from "./Modelisation";

/**
 * @param {number} userId
 * @param {url} from .env REACT_APP_BASE_URL
 */

export default class Api {
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
   *
   * @param {string} endpoint
   * @returns {object} a data object containing use data
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

  async getFirstName() {
    const userData = await this.userData;
    return userData.firstName;
  }
  async getKeyDatas() {
    const userData = await this.userData;
    return userData.keyDatas;
  }
  async getUserScore() {
    const userData = await this.userData;
    return userData.userScore;
  }

  async getUserAverageSessions() {
    const response = await this._fetchJSON("average-sessions");
    const data = await response.json();
    return this.Modelisation.adaptUserAverageSessions(data.data.sessions);
  }

  async getUserActivity() {
    const response = await this._fetchJSON("activity");
    const data = await response.json();

    return this.Modelisation.adaptUserActivity(data.data.sessions);
  }

  async getUserPerformance() {
    const response = await this._fetchJSON("performance");
    const data = await response.json();
    return this.Modelisation.adaptUserPerformance(data);
  }
}
