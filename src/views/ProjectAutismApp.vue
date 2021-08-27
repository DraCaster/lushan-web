<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Autism APP" date="February, 2020" tags="Frontend / Backend"/>
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
  data(){return{nameClient: 'LINTI - FI - UNLP',
    services: 'Frontend & Backend Development',
    objectiveText: 'To develop a technological tool for monitoring the evolutionary process of the autistic infant.',
    toolsAndTechnologies: 'Angular JS, TypeScript, NodeJS, Express, MongoDB',
    challengeTextPartOne: 'To develop a technological tool for teaching autistic girls and boys, focusing on comprehensive intervention on early behavior for girls and boys with autism.',
    challengeTextPartTwo: 'Defining the competences that must be taught at a given moment, as well as a set' +
        ' of teaching procedures, such as learning speech, emphasizing the modulation and stopping of words, ' +
        'capturing the infants attention, with the intention of a future imitation of the same with respect ' +
        'to what was expressed.',
    challengeTextPartThree: 'A mobile tool was developed with accessible features for use by people with any type of different capacity.',
    challengeTextPartFour: 'It allows the infants progress to be recorded by the responsible therapist who acts as a user of the mobile application: By' +
        ' means of records, the user records the infants evolution in the tool, selecting the type of progress and the cost involved in said learning.Use geolocation features to find the closest related hospitals, organizations, and centers.'}}
};
</script>

