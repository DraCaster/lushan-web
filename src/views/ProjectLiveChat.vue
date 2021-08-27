<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Live chat" date="Jul, 2020" tags="Frontend / Backend"/>
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
    services: 'Fullstack Development',
    objectiveText: 'Develop a simple chat.',
    toolsAndTechnologies: 'ReactJs, Material UI, NodeJs, Express, SocketIO',
    challengeTextPartOne: 'Develop a simple chat to test the socket IO library.',
    challengeTextPartTwo: 'Github: https://github.com/DraCaster/live-chat',
    challengeTextPartThree: '',
    challengeTextPartFour: ''}}
};
</script>

