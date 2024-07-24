<script>
  import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>Your Name - Portfolio</title>
</svelte:head>

<div class="text-center">
  <h1 class="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200" in:fly="{{ y: 20, duration: 500 }}">Welcome to My Portfolio</h1>
  <p class="text-xl mb-8 text-gray-600 dark:text-gray-400" in:fly="{{ y: 20, duration: 500, delay: 200 }}">I'm a passionate developer specializing in web technologies.</p>
  <div class="flex justify-center space-x-4" in:fly="{{ y: 20, duration: 500, delay: 400 }}">
    <a href="/resume" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition duration-300">View Resume</a>
    <a href="/projects" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition duration-300">See Projects</a>
  </div>
</div>