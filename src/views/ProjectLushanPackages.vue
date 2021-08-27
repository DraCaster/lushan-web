<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Lushan packages" date="February, 2020" tags="Javascript / NPM"/>
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
    services: 'Javascript Development',
    objectiveText: 'Set of packages to make development easier.',
    toolsAndTechnologies: 'Javascript, NodeJS, Mongoose, MongoDB',
    challengeTextPartOne: 'A set of libraries with different utilities was developed to make some backend tasks easier.',
    challengeTextPartTwo: '',
    challengeTextPartThree: '',
    challengeTextPartFour: ''}}
};
</script>

