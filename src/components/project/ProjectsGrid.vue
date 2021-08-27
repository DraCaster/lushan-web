<template>
	<section class="pt-20 sm:pt-28">
		<div class="text-center">
			<p
				class="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light"
			>
				Projects Portfolio
			</p>
			<p class="text-md sm:text-xl text-gray-500 dark:text-ternary-light">
				Some of the projects I have successfully completed
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
	<router-link
      v-for="(elem, index) in projectsTwo" :key="index"
				:to="elem.path"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						:src="elem.img"
						alt=""
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
					{{elem.title}}
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>{{elem.description}}</span
					>
				</div>
  </router-link>
		</div>
    <div v-if="showMoreProjects" class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
      <router-link v-for="(elem, index) in projects" :key="index"
          :to=elem.path
          class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
      >
        <div>
          <img
              :src="elem.img"
              alt=""
              class="rounded-t-3xl border-none"
          />
        </div>
        <div class="text-center px-4 py-6">
          <p
              class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
          >
            {{elem.title}}
          </p>
          <span
              class="text-lg text-ternary-dark dark:text-ternary-light"
          >{{ elem.description }}</span
          >
        </div>
      </router-link>
    </div>
		<div class="mt-10 sm:mt-20 flex justify-center" v-show="!showMoreProjects">
			<button
          @click="showMoreProjects = true"
				class="flex items-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 text-white text-lg sm:text-xl font-medium"
			>
				<i data-feather="refresh-cw" class="w-5 mr-3"></i>
				<span>Load More</span>
			</button>
		</div>
	</section>
</template>

<script>
import feather from 'feather-icons';
import {projectAprendoJugando,
  projectTickets,
  projectAutismApp,
  projectPackages,
  projectScaffold,
  projectLiveChat,
  projectGamePortal,
  projectTasksKittens,
  projectConectar} from '../../assets/images/images'
export default {
	name: 'Projects',
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
  data(){return{
    showMoreProjects: false,
    projects:[{title:'Aprendo Jugando',description:'Web application',img:projectAprendoJugando,path:'/projects/project-aprendo-jugando'},
      {title:'Gestion de tickets',description:'Mobile application',img:projectTickets,path:'/projects/project-ticket-management'},
      {title:'Autism app',description:'Web/Mobile application',img:projectAutismApp,path:'/projects/project-autism-app'},
      {title:'Lushan packages',description:'NPM packages',img:projectPackages,path:'/projects/project-lushan-packages'},
      {title:'Scaffold',description:'SPA template',img:projectScaffold,path:'/projects/project-scaffold'},
      {title:'Kittens, tasks and to do',description:'Web application',img:projectTasksKittens,path:'/projects/project-kittens-tasks-and-to-do'}
    ],
    projectsTwo:[
      {title:'Conectar',description:'Desktop application',img:projectConectar,path:'/projects/project-conectar'},
      {title:'Game portal',description:'Web application',img:projectGamePortal,path:'/projects/project-game-portal'},
      {title:'Live chat',description:'Web application',img:projectLiveChat,path:'/projects/project-live-chat'}]
    }
  },
};
</script>

