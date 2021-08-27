<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Conectar" date="March, 2018" tags="Python"/>
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
    services: 'UI Design & Frontend Development',
    objectiveText: 'Develop a set of games for educational purposes.',
    toolsAndTechnologies: 'Python, Pygame',
    challengeTextPartOne: 'Develop an interactive application for boys and girls with mini educational games.',
    challengeTextPartTwo: 'In 2018, I was a childrens programming teacher. In that year, I developed this game for those children.',
    challengeTextPartThree: 'For the development of the games I used Pygame. And it is developed in python.',
    challengeTextPartFour: ''}}
};
</script>

