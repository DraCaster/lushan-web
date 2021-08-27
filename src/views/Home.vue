<template>
	<div class="container mx-auto">
		<Banner />
		<ProjectsGrid />
	</div>
</template>

<script>
import Banner from '@/components/home/Banner';
import ProjectsGrid from '@/components/project/ProjectsGrid';
import feather from 'feather-icons';

export default {
	name: 'Home',
	components: {
		Banner,
		ProjectsGrid,
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	}
};
</script>

