<template>
	<main class="bg-radial flex grow items-center justify-center from-slate-700 to-slate-500">
		<form class="min-w-md rounded bg-white p-4 shadow" @submit.prevent="onSubmit">
			<h1 class="text-center text-xl font-bold uppercase">Vue hCaptcha Component</h1>
			<hr class="my-8 opacity-20" />
			<InputText v-model="form.firstName" label="First Name" class="mb-4" />
			<InputText v-model="form.lastName" label="Last Name" class="mb-4" />
			<InputText v-model="form.email" type="email" label="Email Address" class="mb-4" />

			<div class="flex justify-end">
				<VueHCaptcha v-model="form.token" sitekey="10000000-ffff-ffff-ffff-000000000001" />
			</div>
			<div class="mt-4 flex justify-end">
				<Button :is-loading="isLoading" type="submit">Submit</Button>
			</div>
		</form>
	</main>
</template>

<script setup>
import { VueHCaptcha } from "vue-hcaptcha-component";
import Button from "./components/Button.vue";
import InputText from "./components/InputText.vue";
import { ref, reactive } from "vue";

const isLoading = ref(false);

const form = reactive({
	firstName: "",
	lastName: "",
	email: "",
	token: "",
});

const onSubmit = async () => {
	isLoading.value = true;
	await new Promise((resolve) => setTimeout(resolve, 2000));
	isLoading.value = false;
};
</script>

<style>
@import "tailwindcss";

@theme {
	--font-sans: "Roboto", "sans-serif";
}

#app {
	min-height: 100dvh;
	display: flex;
	flex-flow: column;
}
</style>
