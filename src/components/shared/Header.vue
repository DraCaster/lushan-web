<template>
	<nav id="nav" class="container mx-auto">
		<div
			class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<div class="flex justify-between items-center">
				<div>
					<router-link to="/">
            <i data-feather="home">Home</i><span>Home</span>
					</router-link>
				</div>

				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg ml-10"
				/>

				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="buttom"
						class="focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-6 w-6 fill-current text-secondary-dark dark:text-ternary-light"
						>
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"
							></path>
							<path
								v-if="!isOpen"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							></path>
						</svg>
					</button>
				</div>
			</div>

			<div
				:class="isOpen ? 'block' : 'hidden'"
				class="ml-3 sm:ml-4 mt-5 sm:mt-3 sm:flex justify-center items-center"
			>
				<router-link
					to="/projects"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-6 mb-2 sm:py-2"
					>Projects</router-link
				>
				<router-link
					to="/about"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-2 mb-2 sm:py-2"
					>About Me</router-link
				>
				<router-link
					to="/contact"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-2 mb-2 sm:py-2"
					>Contact</router-link
				>
			</div>
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row"
			>
				<div
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				>
					<theme-switcher
						:theme="theme"
						@themeChanged="updateTheme"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import ThemeSwitcher from '../ThemeSwitcher';
import feather from 'feather-icons';

export default {
	components: {
		ThemeSwitcher,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>
