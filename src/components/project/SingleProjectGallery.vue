<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div class="mb-10 sm:mb-0">
			<img
				:src="imgOne"
				class="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
				alt="project image"
			/>
		</div>
		<div class="mb-10 sm:mb-0">
			<img
				:src="imgTwo"
				class="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
        alt="project image"
			/>
		</div>
		<div>
			<img
				:src="imgThree"
				class="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
        alt="project image"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props:{imgOne: String,
  imgTwo: String,
  imgThree: String}
};
</script>
