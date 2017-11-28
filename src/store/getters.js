/**
 * @file
 * Contains implementation of Vuex storage getters.
 */

/**
 * Get finded city data.
 * @returns {Object}
 *   Object of city data.
 */
export const getFindedCityData = state => {
  return state.findedCityData
}

/**
 * Get array of cities data.
 * @returns {Object}
 *   Object of arrays of cities data.
 */
export const getSavedCities = state => {
  return state.savedCities
}
