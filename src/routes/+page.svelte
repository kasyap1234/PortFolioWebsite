<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { fly, fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Maksim Postnikov | Product Designer & Developer</title>
</svelte:head>

<div class="min-h-screen bg-white">
  <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-unbounded font-bold mb-6" in:fly="{{ y: -20, duration: 1000 }}">
        <span class="text-blue-600">Quality</span> design & web development synergy
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-3xl" in:fade="{{ duration: 1000, delay: 500 }}">
        I create intuitive design for websites and apps, helping businesses enhance user experience, boost key metrics and achieve digital leadership
      </p>
      <a href="/contact" class="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
        Request a project
      </a>
    </div>
  </section>
</div>
