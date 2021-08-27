<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14"
		>
			Related Projects
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <router-link v-for="(item, index) in projects" :key="index"
          :to="item.path">
			<div>
				<img
					:src="item.img"
					class="rounded-2xl cursor-pointer"
					:alt="item.name"
				/>
      </div>
      </router-link>
		</div>
	</div>
</template>

<script>
import {projectConectar, projectAutismApp, projectPackages, projectScaffold} from '../../assets/images/images'
export default {
	data(){
    return{
      projects:[{name:'Conectar',path:'/projects/project-conectar',img:projectConectar},
        {name:'AutismApp',path:'/projects/project-autism-app',img:projectAutismApp},
        {name:'Lushan packages',path:'/projects/project-lushan-packages',img:projectPackages},
        {name:'Scaffold SPA',path:'/projects/project-scaffold',img:projectScaffold}]
    }
  }
};
</script>
