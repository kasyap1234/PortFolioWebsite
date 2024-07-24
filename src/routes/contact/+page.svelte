<script>
	import { fly } from 'svelte/transition';

	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		// Here you would typically send the form data to a server
		console.log('Form submitted:', { name, email, message });
		alert('Thank you for your message! I will get back to you soon.');
		name = '';
		email = '';
		message = '';
	}
</script>

<svelte:head>
	<title>Your Name - Contact</title>
</svelte:head>

<div class="max-w-2xl mx-auto" in:fly={{ y: 20, duration: 500 }}>
	<h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Me</h1>
	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<div>
			<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Name</label
			>
			<input
				type="text"
				id="name"
				bind:value={name}
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			/>
		</div>
		<div>
			<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Email</label
			>
			<input
				type="email"
				id="email"
				bind:value={email}
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			/>
		</div>
		<div>
			<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Message</label
			>
			<textarea
				id="message"
				bind:value={message}
				rows="4"
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			></textarea>
		</div>
		<div>
			<button
				type="submit"
				class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-200"
			>
				Send Message
			</button>
		</div>
	</form>
</div>
