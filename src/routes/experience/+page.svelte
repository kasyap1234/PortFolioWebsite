<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  // We'll add more data and logic here as needed
</script>

<svelte:head>
  <title>Your Name | Product Designer & Developer</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
  <!-- Hero Section -->
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl font-bold text-gray-900 mb-4" in:fly="{{ y: -20, duration: 1000 }}">
        Your Name
      </h1>
      <p class="text-2xl text-gray-600 mb-8" in:fade="{{ duration: 1000, delay: 500 }}">
        Product Designer & Developer
      </p>
      <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Request a project
      </a>
    </div>
  </section>

  <!-- Projects Section -->
  <!-- Services Section -->
  <!-- About Me Section -->
  <!-- Contact Section -->

</div>

<style lang="postcss">
  /* Any additional custom styles can go here */
</style>
