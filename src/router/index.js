import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Lushan - Home',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: 'Lushan - About',
		},
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
		meta: {
			title: 'Lushan - Projects',
		},
	},
	{
		path: '/projects/project-aprendo-jugando',
		name: 'Project aprendo jugando',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectAprendoJugando.vue'
			),
		meta: {
			title: 'Lushan - Project - Aprendo jugando',
		},
	},
	{
		path: '/projects/project-lushan-packages',
		name: 'Project Lushan packages',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectLushanPackages.vue'
				),
		meta: {
			title: 'Lushan - Project - Lushan packages',
		},
	},
	{
		path: '/projects/project-conectar',
		name: 'Project Conectar',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectConectar.vue'
				),
		meta: {
			title: 'Lushan - Project - Conectar',
		},
	},
	{
		path: '/projects/project-game-portal',
		name: 'Project Game portal',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectGamePortal.vue'
				),
		meta: {
			title: 'Lushan - Project - Game portal',
		},
	},
	{
		path: '/projects/project-live-chat',
		name: 'Project Live chat',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectLiveChat.vue'
				),
		meta: {
			title: 'Lushan - Project - Live chat',
		},
	},
	{
		path: '/projects/project-ticket-management',
		name: 'Project ticket management',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectTicketManagement.vue'
				),
		meta: {
			title: 'Lushan - Project - Gestion de tickets',
		},
	},
	{
		path: '/projects/project-autism-app',
		name: 'Project Autism app',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectAutismApp.vue'
				),
		meta: {
			title: 'Lushan - Project - Autism app',
		},
	},
	{
		path: '/projects/project-scaffold',
		name: 'Project Scaffold',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectScaffold.vue'
				),
		meta: {
			title: 'Lushan - Project - Scaffold',
		},
	},
	{
		path: '/projects/project-kittens-tasks-and-to-do',
		name: 'Project Kittens tasks and to do',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/ProjectKittensTasksAndToDo.vue'
				),
		meta: {
			title: 'Lushan - Project - Kittens tasks and to do',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Contact.vue'),
		meta: {
			title: 'Lushan - Contact',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
