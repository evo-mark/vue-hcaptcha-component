# Vue hCaptcha Component

A completely rewritten version of the hCaptcha component in Vue 3 using TypeScript and the Composition API. Works as a drop-in replacement for [hCaptcha's version](https://github.com/hCaptcha/vue-hcaptcha).

- Get the token using `v-model` automatically on verified
- Get the responseId using `v-model:response-id`
- Fully typed
- Written in Composition API and compiled
- No Options API dependency making it safe to treeshake
- Compatible with Vue 3+
- More new features coming soon

See demo at https://evo-mark.github.io/vue-hcaptcha-component/

## Install

```sh
pnpm add vue-hcaptcha-component
```

## Usage

```html
<template>
	<VueHCaptcha v-model="token" sitekey="10000000-ffff-ffff-ffff-000000000001" />
</template>

<script setup>
	import { VueHCaptcha } from "vue-hcaptcha-component";
	import { ref } from "vue";

	const token = ref("");
</script>
```

Or if you need to control it manually in invisible mode (Enterprise Only):

```html
<template>
	<VueHCaptcha ref="captcha" sitekey="10000000-ffff-ffff-ffff-000000000001" />
</template>

<script setup>
	import { VueHCaptcha } from "vue-hcaptcha-component";
	import { useTemplateRef } from "vue";

	const captchaRef = useTemplateRef("captcha");

	const onSubmit = async () => {
		const { response, key } = await captchaRef.value.executeAsync();

		const result = await axios.post("https://evomark.co.uk/fake-url", {
			token: key,
		});
	};
</script>
```

### Exposed Functions (Access via template ref)

| Name         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| execute      | Execute the challenge and return the response                   |
| executeAsync | Asynchronously execute challenge, returns promise with response |
| reset        | Reset the state of the captcha                                  |

## FAQs

- Does this work with Vue 2?

No. Vue 2 is end-of-life now and this component is built using modern standards. Please use [hCaptcha's version](https://github.com/hCaptcha/vue-hcaptcha) if you need this functionality.

- Why did this need to be rewritten in Composition API?

Two reasons. Firstly, the upcoming Vapor compilation mode in Vue will only support the Composition API. Secondly, many people use [compile-time flags](https://vuejs.org/api/compile-time-flags.html) that remove the Options API from the Vue runtime, which obviously breaks components written in Options API.

- Any new features?

At the moment, we're focusing on cleaning up the existing code. We will likely bring in features like manually-triggered loading or intersection-observer triggers in the future though. We'll also be introducing unit tests soon.

## Support Open-Source Software

We're providing this package free-of-charge to the community. However, all development and maintenance costs time, energy and money. So please help fund this project if you can.

<p align="center" style="display:flex;align-items:center;gap:1rem;justify-content:center">
<a href="https://github.com/sponsors/craigrileyuk" target="_blank">
<img src="https://img.shields.io/badge/sponsor-GitHub%20Sponsors-fafbfc?style=for-the-badge&logo=github">
</a>
<a href="https://www.buymeacoffee.com/craigrileyuk" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
</p>

---

For full installation instructions and documentation, visit [evoMark](https://evomark.co.uk/open-source-software/vue-hcaptcha-component/) (coming soon).
