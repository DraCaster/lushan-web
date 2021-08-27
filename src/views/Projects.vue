<template>
	<div class="container mx-auto">
		<ProjectsGrid />
	</div>
</template>

<script>
import ProjectsGrid from '@/components/project/ProjectsGrid';
import feather from 'feather-icons';

export default {
	name: 'Projects',
	components: {
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

