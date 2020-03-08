<template>
    <div class="main">
        <form @submit.prevent="getWeather">
            <b-field>
                <b-input v-model="city"></b-input>
            </b-field>
            <b-button @click="getWeather">Получить прогноз погоды города <b>{{setCity}}</b></b-button>
        </form>
        <list/>

    </div>
</template>

<script>
	import {mapActions} from 'vuex';
	import list from './components/list';

	export default {
		data: () => ({
			city: '',
		}),
		methods: {
			...mapActions(['GET_WEATHER']),

			getWeather() {
				this.GET_WEATHER(this.setCity);
			}
		},
		computed: {
			setCity() {
				if ( this.city !== '' ) {
					return this.city;
				} else if ( this.$route.query.city !== '' ) {
					return this.$route.query.city;
				} else {
					return '';
				}
			}
		},
		components: {
			list
		},
		mounted() {
			if ( this.$route.query.city !== undefined ) {
				this.getWeather();
			}

			if ( this.city === '' && this.$route.query.city !== '' ) {
				this.city = this.$route.query.city;
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
