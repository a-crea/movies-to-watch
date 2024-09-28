<template>
	<button
		:type="type"
		:class="[
			'btn',
			`btn-${size}`,
			`btn-${color}`,
			{ 'w-full': block },
			{ 'pointer-events-none': loading },
			{ 'btn-outline': outline },
		]"
		:disabled="disabled"
	>
		<span
			v-if="loading"
			class="loading loading-spinner"
			:class="[`loading-${size}`]"
		></span>
		<span>{{ label }}</span>
	</button>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

// Define the props interface
interface ButtonProps {
	label: string;
	loading?: boolean;
	block?: boolean;
	type?: 'button' | 'submit' | 'reset';
	size?: 'sm' | 'md' | 'lg';
	color?:
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'neutral'
		| 'info'
		| 'success'
		| 'warning'
		| 'error';
	outline?: boolean;
	disabled?: boolean;
}

// Use withDefaults to provide default values
const props = withDefaults(defineProps<ButtonProps>(), {
	loading: false,
	block: false,
	type: 'button',
	size: 'md',
	color: 'primary',
	outline: false,
	disabled: false,
});
</script>
