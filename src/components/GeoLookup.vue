<template>
  <div class="geo-lookup" v-if="currentCityData">
    <p>
      Weather of current city: {{ currentCityData.name }}, {{ currentCityData.sys.country }};
      Wind temperature: {{ currentCityData.main.temp }} °F
    </p>
  </div>
</template>

<script>
  // Application imports.
  import weatherDataService from '@/services/WeatherData.js'
  
  export default {
    data () {
      return {
        currentCityData: ''
      }
    },
    mounted () {
      this.geolookup()
    },
    methods: {
      /**
       * Geo lookup method.
       */
      geolookup: function () {
        /* global navigator */
        var self = this
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(position => {
            self.lat = position.coords.latitude
            self.lon = position.coords.longitude
            weatherDataService.getCurrentLocation(self.lat, self.lon).then(res => {
              self.currentCityData = res.data
            })
          })
        } else {}
      }
    }
  }
</script>
