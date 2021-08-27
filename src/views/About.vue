<template>
	<div>
		<div class="container mx-auto">
			<AboutMe />
		</div>
		<AboutCounter />
	</div>
</template>

<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	}
};
</script>

