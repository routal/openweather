<template>
    <div class="weather">
        <div class="weather__list" v-for="weather in getAlignmentValue.list">
            <item :weather="weather"/>
        </div>
        <div class="weather__error" v-if="getCityStatus">{{cityNotFound}}</div>
    </div>
</template>

<script>
	import item from './item';
	import {mapGetters} from 'vuex';

	export default {
		data: () => ({
			cityNotFound: 'Данный город не найден, попробуйте изменить запрос'
		}),
		components: {
			item
		},
		computed: {
			...mapGetters(['getAlignmentValue', 'getCityStatus']),
		},

	};
</script>


