<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Game portal" date="Mar, 2021" tags="Frontend / Backend"/>
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
  data(){return{nameClient: 'Personal Project',
    services: 'UI Design & Fullstack Development',
    objectiveText: 'Develop a classic games portal.',
    toolsAndTechnologies: 'VueJs, Vuetify, Express, SocketIO',
    challengeTextPartOne: 'I really like simple and classic games, for that reason I decided to carry out the development of' +
        ' a website which contains a list of various games such as Tic Tac Toe, Hangman game, among others.',
    challengeTextPartTwo: 'Some games allow multiplayer option.',
    challengeTextPartThree: 'Future work will be adding more games.',
    challengeTextPartFour: ''}}
};
</script>

