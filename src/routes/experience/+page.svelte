<script lang="ts">
	import { appBarClasses } from '@mui/material';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
 
   const experiences = [

    {
      title: 'Backend and Devops tutor',
      company: '',
      period: 'May 2024 - July 2024',
      description: "Tutoring students on backend and devops concepts."
    },
    {
      title: 'Freelance Developer',
      company: 'Anjali Pickles',
      period: 'April 2024 - May 2024',
      description: "Developed custom software solutions to meet client's specific needs."
    },
    {
      title: 'Volunteer Developer',
      company: 'NGO Bangaru Telangana',
      period: 'April 2024 - May 2024',
      description: "Contributed technical skills to support the NGO's mission and initiatives."
    },
    {title: 'Open source contribution',
       company: 'Infisical',
      period: 'July 2024',
    description : 'Contributed to open source project for Infisical '},
  ];

 
  // We'll add more data and logic here as needed
</script>

<svelte:head>
  <title>Kasyap Dharanikota | Software Engineer</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
  <h1 class="text-5xl font-bold text-blue-700 mb-12" in:fly="{{ duration: 1000 }}"> Part time and Freelance work  </h1>
  </div> 


<div class="space-y-12"> 
  {#each experiences as experience}
    <div class="bg-white  max-w-90 rounded-lg shadow-lg p-8 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-102" in:fade="{{ duration: 1000 }}">
      <h2 class="text-3xl font-bold text-blue-700 mb-3">{experience.title}</h2>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">{experience.company}</h3>
      <p class="text-md text-gray-500 mb-4">{experience.period}</p>
      <p class="text-gray-600 leading-relaxed">{experience.description}</p>
    </div>
  {/each}
</div>
    </div>
 

<style lang="postcss">
  /* Any additional custom styles can go here */
</style>
