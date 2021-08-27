<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Kittens, tasks and to do" date="Oct, 2019" tags="Frontend"/>
		<SingleProjectInfo :nameClient="nameClient"
                       :services="services"
                       :objectiveText="objectiveText"
                       :toolsAndTechnologies="toolsAndTechnologies"
                       :challengeTextPartOne="challengeTextPartOne"
                       :challengeTextPartTwo="challengeTextPartTwo"
                       :challengeTextPartThree="challengeTextPartThree"
                       :challengeTextPartFour="challengeTextPartFour"/>
		<hr class="mt-10 sm:mt-20 text-ternary-dark dark:text-ternary-dark" />
		<SingleProjectRelatedProjects />
	</div>
</template>

<script>
import SingleProjectHeader from '@/components/project/SingleProjectHeader';
import SingleProjectInfo from '@/components/project/SingleProjectInfo';
import SingleProjectRelatedProjects from '@/components/project/SingleProjectRelatedProjects';
import feather from 'feather-icons';

export default {
	name: 'Projects',
	components: {
		SingleProjectHeader,
		SingleProjectInfo,
		SingleProjectRelatedProjects,
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
  data(){return{nameClient: 'Personal project',
    services: 'Frontend Development',
    objectiveText: 'Develop a kitty-themed task manager.',
    toolsAndTechnologies: 'ReactJS, Material UI',
    challengeTextPartOne: 'Github: https://github.com/DraCaster/kittens-tasks-and-to-do',
    challengeTextPartTwo: '',
    challengeTextPartThree: '',
    challengeTextPartFour: ''}}
};
</script>

