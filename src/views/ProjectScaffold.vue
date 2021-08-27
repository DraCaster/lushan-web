<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Scaffold Project" date="Jul, 2020" tags="Frontend / ReactJs"/>
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
    services: 'Frontend development',
    objectiveText: 'Develop a template to use as the basis for other projects',
    toolsAndTechnologies: 'ReactJS, React Router, Material UI.',
    challengeTextPartOne: 'Github: https://github.com/DraCaster/react-scaffold',
    challengeTextPartTwo: '',
    challengeTextPartThree: '',
    challengeTextPartFour: ''}}
};
</script>

