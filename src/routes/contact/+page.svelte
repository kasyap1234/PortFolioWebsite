<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';

  let name = '';
  let email = '';
  let message = '';

  const handleSubmit = () => {
    // Implement form submission logic here
    console.log('Form submitted:', { name, email, message });
  };
</script>

<svelte:head>
  <title>Contact | Your Name</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-5xl font-extrabold text-indigo-900 mb-8" in:fade="{{ duration: 1000 }}">
      Get in Touch
    </h1>
    <form on:submit|preventDefault={handleSubmit} class="bg-white rounded-xl shadow-lg p-8" in:fade="{{ duration: 500, delay: 200 }}">
      <div class="mb-6">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" id="name" bind:value={name} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
      </div>
      <div class="mb-6">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" id="email" bind:value={email} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea id="message" bind:value={message} rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
      </div>
      <button type="submit" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
        Send Message
      </button>
    </form>
  </div>
</div>
