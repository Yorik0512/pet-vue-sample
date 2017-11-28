/**
 * @file
 * Contains implementation of service to retrieve data for cities.
 */

// Axios import.
import axios from 'axios'

// TODO: https://openweathermap.org/current

/**
 * weatherData provides methods to get data of cities.
 */
class WeatherData {
  /**
   * Constructor.
   * @param {string} apiKey
   *   API key string.
   */
  constructor (apiKey) {
    this.apiKey = apiKey
  }

  /**
   * Retrieves cities data by geo lookup.
   * @param {string} lat
   *   Latitude.
   * @param {string} lon
   *   Longitude.
   * @returns {Promise}
   *   Promise.
   */
  async getCurrentLocation (lat, lon) {
    try {
      const urlGeoLookup = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
      const response = await axios.get(urlGeoLookup)
      return response
    } catch (error) {
      this.errorHandler(error)
    }
  }

  /**
   * Retrieves cities data by city name.
   * @param {string} cityName
   *   City name.
   * @returns {Promise}
   *   Promise.
   */
  async getCityData (cityName) {
    try {
      const urlCityNameLookup = `//api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`
      const response = await axios.get(urlCityNameLookup)
      return response
    } catch (error) {
      this.errorHandler(error)
    }
  }

  /**
   * Retrieves cities data by city id.
   * @param {number} cityId
   *   City id.
   * @returns {Promise}
   *   Promise.
   */
  async getCityDataById (cityId) {
    try {
      const urlCityNameLookup = `//api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${this.apiKey}`
      const response = await axios.get(urlCityNameLookup)
      return response
    } catch (error) {
      this.errorHandler(error)
    }
  }

  /**
   * Implement error handler.
   **/
  errorHandler (error) {
    console.log(error)
  }
}

/**
 * API key.
 * @type {string}
 */
const apiKey = '36d87955362b82354b5e2915d3fd437a'

/**
 * Init weatherDataService object.
 */
const weatherDataService = new WeatherData(apiKey)

/**
 * Export weatherDataService object.
 */
export default weatherDataService
