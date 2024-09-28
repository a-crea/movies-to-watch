<template>
	<div class="flex justify-center items-center h-screen bg-gray-100">
		<div
			class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md mx-4"
		>
			<h2 class="text-2xl font-bold text-center">
				{{ isLogin ? 'Login' : 'Sign Up' }}
			</h2>
			<form @submit.prevent="handleSubmit" class="space-y-4">
				<BaseInput v-model="email" type="email" label="Email" required />
				<BaseInput
					v-model="password"
					type="password"
					label="Password"
					required
				/>

				<BaseButton
					:label="isLogin ? 'Login' : 'Sign Up'"
					:loading="loading"
					type="submit"
					size="lg"
					color="primary"
					block
					:disabled="loading"
				/>
			</form>
			<p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
			<div class="text-center mt-4">
				<p>
					{{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
					<a @click="toggleMode" class="text-blue-500 cursor-pointer underline">
						{{ isLogin ? 'Sign Up' : 'Login' }}
					</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLogin = ref(true);
const loading = ref(false);

const supabase = useSupabaseClient();

const toggleMode = () => {
	isLogin.value = !isLogin.value;
	errorMessage.value = '';
};

const onSignUp = async () => {
	const { error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
	});
	if (error) {
		errorMessage.value = error.message;
	} else {
		console.log('User signed up successfully');
	}
};

const onLogin = async () => {
	// Handle Login
	const { error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value,
	});
	if (error) {
		errorMessage.value = error.message;
	} else {
		console.log('User logged in successfully');
	}
};

const handleSubmit = async () => {
	loading.value = true;

	errorMessage.value = '';

	if (isLogin.value) {
		await onLogin();
	} else {
		await onSignUp();
	}

	loading.value = false;
};
</script>
