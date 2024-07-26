<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
    import Slider from '$lib/components/Slider.svelte';

</script>

<svelte:head>
  <title>About Me |Kasyap Dharanikota</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br  py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-5xl font-extrabold text-blue-600 mb-8" in:fade="{{ duration: 1000 }}">
      About Me
    </h1>
    <div class="bg-white rounded-xl shadow-lg p-8" in:fade="{{ duration: 500, delay: 200 }}">
      <p class="text-xl text-gray-800 mb-6">
        I am a full stack software engineer with diverse skill sets ,specializing in backend-development, AI and Devops . 
       
      <p class="text-xl text-gray-800 mb-6">
      I have a passion for building efficient and optimal solutions. 
      </p>
      <h2 class="text-3xl font-bold text-blue-600 mb-4">Skills</h2>
      <ul class="list-disc list-inside text-gray-800 mb-6">
        <li> Devops </li>
        <li>Front-end Development</li>
        <li>Backend Development </li>
        <li>GenAI LLM</li>
       
      </ul>
     <Slider /> 

    </div>
  </div>
</div>
