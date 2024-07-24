<script>
  import { fly } from 'svelte/transition';

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of project 2.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      title: "Project 3",
      description: "A brief description of project 3.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    }
  ];
</script>

<svelte:head>
  <title>Your Name - Projects</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each projects as project, index}
    <div 
      class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200 transform hover:scale-105 transition-transform duration-200"
      in:fly="{{ y: 20, duration: 500, delay: index * 200 }}"
    >
      <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-600 transition duration-300">View Project</a>
      </div>
    </div>
  {/each}
</div>