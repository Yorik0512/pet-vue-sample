// Application imports.
import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import browserLocalStorage from '@/services/LocalStorage.js'
import weatherDataService from '@/services/WeatherData.js'

Vue.use(Vuex)

// Store state.
const state = {
  findedCityData: {},
  savedCities: []
}

// Add savedCities from state to browser local storage.
const savedCities = 'savedCities'
if (browserLocalStorage.getLocalStorage(savedCities) === null) {
  // Save as default.
  browserLocalStorage.setLocalStorage(savedCities, state.savedCities)
} else if (browserLocalStorage.getLocalStorage(savedCities).length === 0) {
  browserLocalStorage.setLocalStorage(savedCities, state.savedCities)
} else if (
  browserLocalStorage.getLocalStorage(savedCities).length > 0 &&
  browserLocalStorage.getLocalStorage(savedCities) !== state.savedCities
) {
  // Update temperature from API and save to state.
  const localStorageData = browserLocalStorage.getLocalStorage(savedCities)
  state.savedCities = localStorageData.map(item => {
    weatherDataService.getCityDataById(item.id).then(resp => {
      item.temp = resp.data.main.temp
    })
    return item
  })
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
