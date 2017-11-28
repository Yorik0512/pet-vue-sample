/**
 * @file
 * Contains implementation of Vuex storage mutations.
 */

// Application imports.
import browserLocalStorage from '@/services/LocalStorage.js'

/**
 * Add current finded city data to storage.
 */
export const findedCityData = (state, value) => {
  if (typeof state.findedCityData === 'object' && typeof value === 'object') {
    if (
      'id' in value && typeof value.id === 'number' &&
      'name' in value && typeof value.name === 'string' &&
      'temp' in value && typeof value.temp === 'number'
      ) {
      state.findedCityData = value
    }
  }
}

/**
 * Clear finded city data from storage.
 */
export const ClearFindedCityData = (state, value) => {
  state.findedCityData = {}
}

/**
 * Save finded city data to cities storage.
 */
export const saveCity = (state, value) => {
  if (typeof state.savedCities === 'object' && typeof value === 'object') {
    state.savedCities.unshift(value)

    // Save to localStorage of browser.
    browserLocalStorage.setLocalStorage('savedCities', state.savedCities)
  }
}

/**
 * Delete city data from cities storage.
 */
export const deleteCity = (state, value) => {
  if (typeof state.findedCityData === 'object' && typeof value === 'object') {
    if (
      'id' in value && typeof value.id === 'number'
      ) {
      state.savedCities = state.savedCities.filter(item => {
        if (item.id !== value.id) {
          return item
        }
      })
      // Save to localStorage of browser.
      browserLocalStorage.setLocalStorage('savedCities', state.savedCities)
    }
  }
}
