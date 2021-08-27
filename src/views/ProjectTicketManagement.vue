<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Ticket management" date="October, 2020" tags="Frontend / Backend"/>
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
    services: 'Fullstack development',
    objectiveText: 'Develop an application that allows you to view the list of tickets created on the Redmine platform.',
    toolsAndTechnologies: 'React native, GraphQL, Apollo',
    challengeTextPartOne: 'The challenge was to develop a mobile application, ' +
        'whose backend services will connect to the api of the Redmine platform, which contains the list of tickets.',
    challengeTextPartTwo: ' With this application you have the list of tickets which you can check the status, ' +
        'filter them, or mark the tickets as resolved.',
    challengeTextPartThree: '',
    challengeTextPartFour: ''}}
};
</script>

