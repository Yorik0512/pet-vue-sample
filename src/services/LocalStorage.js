/**
 * @file
 * Contains implementation of service to work with borwser local storage.
 */

/**
 * LocalStorage provides methods to get and set data to browser local storage.
 */
class LocalStorage {
  /* global localStorage */

  /**
   * Set data to browser local storage.
   * @param {string} lname
   *   Name of local storage.
   * @param {any} ldata
   *   Data of local storage.
   */
  setLocalStorage (lname, ldata) {
    if (typeof lname === 'string') {
      localStorage.setItem(lname, JSON.stringify(ldata))
    } else {
      this.errorHandler('First parameter must be a string.')
    }
  }

  /**
   * Get data from browser local storage.
   * @param {string} lname
   *   Name of local storage.
   * @returns {any}
   *   Any data
   */
  getLocalStorage (lname) {
    if (typeof lname === 'string') {
      return JSON.parse(localStorage.getItem(lname))
    } else {
      this.errorHandler('First parameter must be a string.')
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
 * Init browserLocalStorage object.
 */
const browserLocalStorage = new LocalStorage()

/**
 * Export browserLocalStorage object.
 */
export default browserLocalStorage
