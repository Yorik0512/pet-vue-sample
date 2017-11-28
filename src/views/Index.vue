<template>
  <el-row justify="center">
    <el-col :xs="24" :sm="16" :md="14" :lg="8">
      <geo-lookup></geo-lookup>
      <city-name-finder></city-name-finder>
      <p v-if="findedCityDataVisability">Finded city:</p>
      <city-item 
        v-if="findedCityDataVisability"
        btn-save 
        :city-data="findedCityData">
      </city-item>
      <p v-if="citiesDataVisability">Saved cities:</p>
      <city-item
        btn-delete
        v-for="city in citiesData"
        :key="city.id"
        :city-data="city">
      </city-item>
    </el-col>
  </el-row>
</template>

<script>
  // Application imports.
  import GeoLookup from '@/components/GeoLookup'
  import CityNameFinder from '@/components/CityNameFinder'
  import CityItem from '@/components/CityItem'
  
  export default {
    data () {
      return {
        lat: '',
        lon: '',
        findedCityData: '',
        citiesData: ''
      }
    },
    computed: {
      findedCityDataVisability: function () {
        return Object.keys(this.findedCityData).length !== 0
      },
      citiesDataVisability: function () {
        return Object.keys(this.citiesData).length !== 0
      }
    },
    watch: {
      '$store.state.findedCityData': function () {
        this.findedCityData = this.$store.getters.getFindedCityData
      },
      '$store.state.savedCities': function () {
        this.citiesData = this.$store.getters.getSavedCities
      }
    },
    mounted () {
      this.citiesData = this.$store.getters.getSavedCities.reverse()
    },
    components: {
      CityNameFinder,
      CityItem,
      GeoLookup
    }
  }
</script>

<style lang="scss" scoped>
  .el-row {
    display: flex;
    justify-content: center;
  }
  
  p {
    text-align: left;
  }
</style>
