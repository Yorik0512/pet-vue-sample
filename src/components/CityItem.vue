<template>
  <div class="city-item">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="name">
            {{ cityData.name }}; Wind temperature: {{ cityData.temp }} °F
          </div>
          <el-button
            v-if="btnSave != null"
            type="primary"
            icon="el-icon-plus"
            @click="saveCity(cityData)">
          </el-button>
          <el-button
            v-if="btnDelete != null"
            type="primary"
            icon="el-icon-delete"
            @click="deleteCity(cityData)">
          </el-button>
        </div>
      </el-col>
    </el-row>
    <p class="error" v-if="errorDublicateData">You trying add existing city</p>
  </div>
</template>

<script>
  export default {
    props: ['btnSave', 'btnDelete', 'cityData'],
    data () {
      return {
        errorDublicateData: false
      }
    },
    watch: {
      '$store.state.findedCityData': function () {
        this.errorDublicateData = false
      }
    },
    computed: {
      savedCities: function () {
        return this.$store.state.savedCities
      }
    },
    methods: {
      /**
       * Save city data to store.
       * @param {object} data
       *   City data.
       */
      saveCity: function (data) {
        const self = this
        const ids = this.$store.getters.getSavedCities.map(item => item.id)
        // const ids = this.$store.state.savedCities.map(item => item.id)
        if (ids.indexOf(self.cityData.id) === -1) {
          // Add to cities store finded city name.
          this.$store.commit('saveCity', data)
  
          // Clear finded city data in store.
          this.$store.commit('ClearFindedCityData')
        } else {
          this.errorDublicateData = true
        }
      },
      /**
       * Delete city data from store.
       * @param {object} data
       *   City data.
       */
      deleteCity: function (data) {
        // Delete from cities store finded city name.
        this.$store.commit('deleteCity', {id: data.id})
      }
    }
  }
</script>

<style lang="scss">
  .el-col {
    border-radius: 4px;
  }
  
  .bg-purple-light {
    background: #e5e9f2;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
    padding: 10px;
  }
  
  .city-item {
    margin: 20px 0;
  }
  
  .name {
    width: 100%;
    padding-top: 12px;
  }
  
  .error {
    color: red;
  }
</style>
