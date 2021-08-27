<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<div class="w-full sm:w-1/3 text-left">
			<div class="mb-7">
				<p
					class="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2"
				>
					About Client
				</p>
				<ul class="leading-loose">
					<li class="text-ternary-dark dark:text-ternary-light">
						<span>Name: </span>
						{{nameClient}}
					</li>
					<li class="text-ternary-dark dark:text-ternary-light">
						<span>Services: </span>
						{{services}}
					</li>
					<!--<li class="text-ternary-dark dark:text-ternary-light">
						<span>Website: </span>
						<a href="#">https://kabul.com</a>
					</li>
					<li class="text-ternary-dark dark:text-ternary-light">
						<span>Phone: </span>
						+93 7888 888 88
					</li> -->
				</ul>
			</div>
			<div class="mb-7">
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					Objective
				</p>
				<p class="text-primary-dark dark:text-ternary-light">
					{{objectiveText}}
				</p>
			</div>
			<div class="mb-7">
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					Tools & Technologies
				</p>
				<p class="text-primary-dark dark:text-ternary-light">
					{{toolsAndTechnologies}}
				</p>
			</div>
			<!-- <div>
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					Share This
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						href="https://twitter.com/NangialaiStoman"
						target="__blank"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
						><i data-feather="twitter" class="w-5 h-5"></i
					></a>
					<a
						href="https://instagram.com/NangialaiStoman"
						target="__blank"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
						><i data-feather="instagram" class="w-5 h-5"></i
					></a>
					<a
						href="https://facebook.com/nangialai.stoman"
						target="__blank"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
						><i data-feather="facebook" class="w-5 h-5"></i
					></a>

					<a
						href="https://linkedin.com/"
						target="__blank"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
						><i data-feather="linkedin" class="w-5 h-5"></i
					></a>
					<a
						href="https://www.youtube.com/c/StomanStudio"
						target="__blank"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
						><i data-feather="youtube" class="w-5 h-5"></i
					></a>
				</div>
			</div> -->
		</div>
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				Challenge
			</p>
			<p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				{{challengeTextPartOne}}
			</p>
			<p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				{{challengeTextPartTwo}}
			</p>
			<p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				{{challengeTextPartThree}}
			</p>
			<p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
        {{challengeTextPartFour}}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props:{nameClient: String,
    services: String,
    objectiveText: String,
    toolsAndTechnologies: String,
    challengeTextPartOne: String,
    challengeTextPartTwo: String,
    challengeTextPartThree: String,
    challengeTextPartFour: String
  }
};
</script>
