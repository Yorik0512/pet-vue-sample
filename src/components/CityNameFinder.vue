<template>
  <div class="city-name-finder">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-input placeholder="Please find city" v-model="inputCityName"></el-input>
          <el-button type="success" @click="getCityName(inputCityName)">Find</el-button>
        </div>
      </el-col>
    </el-row>
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
  // Application imports.
  import weatherDataService from '@/services/WeatherData.js'
  
  export default {
    data () {
      return {
        inputCityName: '',
        errorMessage: false
      }
    },
    methods: {
      /**
       * Get city name method.
       * @param {string} name
       *   City name.
       */
      getCityName: function (name) {
        const self = this
        self.inputCityName = ''

        weatherDataService.getCityData(name).then(res => {
          if (typeof res !== 'undefined') {
            const data = res.data
            self.errorMessage = false

            // Add to store finded city name.
            self.$store.commit('findedCityData', {
              id: data.id,
              name: `${data.name}, ${data.sys.country}`,
              temp: data.main.temp
            })
          } else {
            // Clear finded city name.
            self.$store.commit('ClearFindedCityData')
            self.errorMessage = `Sorry, we can't find city with name "${name}". Please enter correct city name.`
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
  }
  
  .el-input {
    margin-right: 10px;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
</style>
