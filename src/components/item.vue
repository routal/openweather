<template>
    <div class="weather__item">
        <div class="weather__day">{{weather.dt_txt}}</div>
        <div>Температура: {{ temperature }} °C</div>
        <div>Ощущается: {{ temperatureFelt }} °C</div>
        <div>Скорость ветра: {{ windSpeed }} метров/сек</div>
    </div>
</template>

<script>

	export default {
		props: {
			weather: {
				type: Object,
				request: true
			}
		},
		computed: {
			windSpeed() {
				return Math.round(this.weather.wind.speed);
			},
			temperatureFelt() {
				return Math.round(this.weather.main.feels_like);
			},
			temperature() {
				return Math.round(this.weather.main.temp);
			}
		}
	};

</script>
