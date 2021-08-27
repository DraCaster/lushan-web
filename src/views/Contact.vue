<template>
	<div class="container mx-auto sm:flex py-5 sm:py-10 mt-10 sm:mt-20">
		<div class="w-full sm:w-1/2">
			<div class="leading-loose">
        <img
            class="rounded-xl w-96"
            src="@/assets/images/contactme.jpeg"
            alt="Contactme"
        />
			</div>
		</div>
		<div class="w-full sm:w-1/2">
			<div class="text-left max-w-xl sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
				<h2
					class="text-2xl text-primary-dark dark:text-primary-light font-semibold mt-9 mb-6"
				>
					Contact details
				</h2>
				<ul class="">
					<li class="flex">
						<i
							data-feather="map-pin"
							class="w-5 text-gray-500 dark:text-gray-400 mr-4"
						></i>
						<p
							class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						>
							La Plata, Buenos Aires, Argentina.
						</p>
					</li>
					<li class="flex">
						<i
							data-feather="mail"
							class="w-5 text-gray-500 dark:text-gray-400 mr-4"
						></i>
						<p
							class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						>
							lujanrojas.informatica@gmail.com
						</p>
					</li>
          <!--
					<li class="flex">
						<i
							data-feather="phone"
							class="w-5 text-gray-500 dark:text-gray-400 mr-4"
						></i>
						<p
							class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						>
							+549 2210000000
						</p>
					</li> -->
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';

export default {
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	}
};
</script>
