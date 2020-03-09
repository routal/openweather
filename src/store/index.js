import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cityWeather: '',
		isCity: false
	},
	getters: {
		getAlignmentValue(state) {
			return state.cityWeather;
		},
		getCityStatus(state) {
			return state.isCity;
		}
	},
	mutations: {
		setWeather(state, weather) {
			state.cityWeather = weather;
		},
		setStatus(state, status) {
			state.isCity = status;
		}
	},
	actions: {
		GET_WEATHER(context, city) {
			const apiKey = "4d8fb5b93d4af21d66a2948710284366";
			const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

			fetch(url)
				.then(response => response.json())
				.then(data => {
					if ( data.cod !== '200' ) {
						this.commit('setStatus', true);
						this.commit('setWeather', '');
					} else {
						this.commit('setWeather', data);
						this.commit('setStatus', false);
						router.push({path: 'Home', query: {city}});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
	modules: {}
});
