# Vue hCaptcha Component

A completely rewritten version of the hCaptcha component in Vue 3 using TypeScript and the Composition API. Works as a drop-in replacement for [hCaptcha's version](https://github.com/hCaptcha/vue-hcaptcha).

- Get the token using `v-model` automatically on verified
- Get the responseId using `v-model:response-id`
- Fully typed
- Compatible with Vue 3+

## Usage

```vue
<template>
	<VueHCaptcha v-model="token" sitekey="10000000-ffff-ffff-ffff-000000000001" />
</template>

<script setup>
import { VueHCaptcha } from "vue-hcaptcha-component";
import { ref } from "vue";

const token = ref("");
</script>
```

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
