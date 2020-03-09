<template>
    <div class="main">
        <form @submit.prevent="getWeather">
            <b-field>
                <b-input v-model="city"></b-input>
            </b-field>
            <b-button @click="getWeather">Получить прогноз погоды города <b>{{city}}</b></b-button>
        </form>
        <theList/>
    </div>
</template>

<script>
	import {mapActions} from 'vuex';
	import theList from './components/list';

	export default {
		components: {theList},
		data: () => ({
			city: '',
		}),
		computed: {
			currentCity() {
				if ( this.city !== '' ) {
					return this.city;
				} else if ( this.$route.query.city !== '' ) {
					return this.$route.query.city;
				} else {
					return '';
				}
			}
		},
		mounted() {
			this.checkAvailabilityCity();
			this.checkAvailabilityCityInUrl();

		},
		methods: {
			...mapActions(['GET_WEATHER']),

			getWeather() {
				this.GET_WEATHER(this.currentCity);
			},

			checkAvailabilityCity() {
				if ( this.$route.query.city !== undefined ) {
					this.getWeather();
				}
			},

			checkAvailabilityCityInUrl() {
				if ( this.city === '' && this.$route.query.city !== '' ) {
					this.city = this.$route.query.city;
				}
			}
		}
	};
</script>


<style lang="scss">
    .weather {

        &__item {
            border-bottom: 1px solid #ddd;
        }

        &__day {
            font-weight: bold;
            font-size: 30px;
        }

        &__error {
            color: #ff1860;
        }
    }

    .main {
        padding: 30px;
    }

    .field {
        max-width: 500px;
    }
</style>
