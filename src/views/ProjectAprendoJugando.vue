<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<SingleProjectHeader title="Aprendo Jugando" date="March, 2018" tags="Javascript / Frontend"/>
		<SingleProjectInfo :nameClient="nameClient"
                       :services="services"
                       :objectiveText="objectiveText"
                       :toolsAndTechnologies="toolsAndTechnologies"
                       :challengeTextPartOne="challengeTextPartOne"
                       :challengeTextPartTwo="challengeTextPartTwo"
                       :challengeTextPartThree="challengeTextPartThree"
                       :challengeTextPartFour="challengeTextPartFour"  />
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
    services: 'UI Design & Frontend Development',
    objectiveText: "Develop an implementation of various educational games based on the 'Propuesta DALE!'. They are a non-profit organization that seeks to help school-aged children with learning difficulties.",
    toolsAndTechnologies: 'HTML5, CSS3, JavaScript, JQuery',
    challengeTextPartOne: 'Digital educational games can serve much more than just entertainment and leisure for children, they can be an extremely important resource for paying attention, sharpening concentration and memory, obtaining new skills, exercising and learning. It encourages exploration, they motivate the performance of activities, the search to find and learn the correct solutions, the motivation to try again and learn from mistakes and stimulate the interest to advance and complete other more complex activities .',
    challengeTextPartTwo: 'That is why it was proposed to develop an implementation where a series of options are presented which allow the child to freely choose which form of game he prefers. The challenge was to develop an application that is intuitive, specially designed so that children do not have difficulties when using it.Each activity has both written and auditory help.',
    challengeTextPartThree: 'Characters were included in the software that accompany the child in carrying out the activities and tell him if it was done satisfactorily or if he needs to try again.',
    challengeTextPartFour: 'Each game features simple navigation, with the possibility of redoing the activity, starting over, or continuing with the next activity.'}}
};
</script>

