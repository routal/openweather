<template>
    <div class="weather__item">
        <div class="weather__day">{{weather.dt_txt}}</div>
        <div>Температура: {{Math.round(weather.main.temp)}} °C</div>
        <div>Ощущается: {{Math.round(weather.main.feels_like)}} °C</div>
        <div>Скорость ветра: {{Math.round(weather.wind.speed)}} метров/сек</div>
    </div>
</template>

<script>

	export default {
		props: {
			weather: {
				type: Object,
				request: true
			}
		}
	};

</script>
