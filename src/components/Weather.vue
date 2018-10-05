<template>
  <div>
    <div v-if="loading"> Loading ...</div>
    <div v-else="" v-for="weater in weaters" class="card">
      <router-link :to="'/weather/' + weater.woeid" tag="a">
        <div class="card-header">
          <h4>
            {{weater.city}}
          </h4>
        </div>
      </router-link>
      <div class="card-block">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <img :src="urlIcon+ weater.weather_state_abbr+'.svg'" alt="Showers" style="width:32px" />
            <span>{{weater.weather_state_name}}</span>
          </li>
          <li class="list-group-item">Temp : {{weater.the_temp}}°C</li>
          <li class="list-group-item">Max : {{weater.max_temp}}°C</li>
          <li class="list-group-item">Min : {{weater.min_temp}}°C</li>
        </ul>
      </div>
    </div>
    <div v-if="notFound">No results were found. Try changing the keyword!</div>
  </div>
</template>

<script>
    import {getHeaders, urlIcon} from '../env'
    export default {
        data () {
            return {
                loading: true,
                notFound: false,
                weaters: [],
                urlIcon: urlIcon(),
                cityName: this.message
            }
        },
        props: ['message'],
        methods: {
            getWeater: function () {
                setTimeout(() => {
                    this.axios.get('/weather.php/?command=search&keyword=' + this.cityName, getHeaders())
                        .then((response) => {
                            if (response.data.length === 0) {
                                this.loading = false;
                                this.notFound = true
                            } else {
                                let woeids = response.data[0].woeid;
                                this.axios.get('weather.php/?command=location&woeid=' + woeids, getHeaders())
                                    .then((response) => {
                                        this.loading = false
                                        this.weaters.push({
                                            city: response.data.title,
                                            woeid: response.data.woeid,
                                            the_temp: Math.round(response.data.consolidated_weather[0].the_temp),
                                            min_temp: Math.round(response.data.consolidated_weather[0].min_temp),
                                            max_temp: Math.round(response.data.consolidated_weather[0].max_temp),
                                            weather_state_name: response.data.consolidated_weather[0].weather_state_name,
                                            weather_state_abbr: response.data.consolidated_weather[0].weather_state_abbr
                                        })
                                    })
                            }
                        })
                        .catch(error => {
                            this.loading = false;
                            this.notFound = true
                        });
                })
            }
        },
        mounted () {
            this.getWeater()
        }
    }
</script>
