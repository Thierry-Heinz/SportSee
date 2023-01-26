/**
 * @param {number} userId
 * @param {url} from .env REACT_APP_BASE_URL
 */

export default class Api {
  constructor(userId) {
    this._userId = userId;
    this._baseURL = process.env.REACT_APP_BASE_URL;
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
    return data;
  }

  async getUserFirstName() {
    const data = await this.getUserData();
    return data.data.userInfos.firstName;
  }

  async getKeyData() {
    const data = await this.getUserData();
    return data.data.keyData;
  }

  async getUserScore() {
    const data = await this.getUserData();
    console.log(data);
    return data.data.todayScore || data.data.score;
  }

  async getUserAverageSessions() {
    const response = await this._fetchJSON("average-sessions");
    const data = await response.json();
    return data.data.sessions;
  }

  async getUserActivity() {
    const response = await this._fetchJSON("activity");
    const data = await response.json();
    return data.data.sessions;
  }

  async getUserPerformance() {
    const response = await this._fetchJSON("performance");
    const data = await response.json();
    return data;
  }
}
