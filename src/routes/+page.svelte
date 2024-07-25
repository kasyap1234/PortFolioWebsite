<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { fly, fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Kasyap Dharanikota  | Software Developer </title>
</svelte:head>

<div class="min-h-screen bg-white">
  <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-unbounded font-bold mb-6" in:fly="{{ y: -20, duration: 1000 }}">
        <span class="text-blue-600">Versatile</span> and quick to adapt to new challenges and environments.
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-3xl" in:fade="{{ duration: 1000, delay: 500 }}">
     I am a passionate software developer with a strong foundation in web development. I have experience working with various technologies and frameworks, including React, Svelte, Node.js,Golang,  and Python. 
      </p>
      <a href="/contact" class="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
        Request a project
      </a>
    </div>
  </section>
</div>
