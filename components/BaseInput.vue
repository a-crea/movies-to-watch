<template>
	<div class="form-control w-full">
		<label v-if="label" class="label">
			<span class="label-text">{{ label }}</span>
		</label>

		<input
			:type="type"
			:value="modelValue"
			:class="[
				'input w-full input-bordered', // Base style
				`input-${size}`,
				{ 'input-error': error },
				{ 'input-disabled': disabled },
				customClass,
			]"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			@input="$emit('update:modelValue', $event.target.value)"
		/>

		<p v-if="errorMessage" class="text-error mt-2">{{ errorMessage }}</p>
	</div>
</template>

<script setup lang="ts">
interface InputProps {
	modelValue: string | number;
	label?: string;
	type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
	placeholder?: string;
	size?: 'sm' | 'md' | 'lg';
	customClass?: string;
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
	errorMessage?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
	type: 'text',
	placeholder: '',
	size: 'md',
	customClass: '',
	disabled: false,
	required: false,
	error: false,
	errorMessage: '',
});

const emit = defineEmits(['update:modelValue']);
</script>
