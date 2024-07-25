<!-- src/routes/projects/+page.svelte -->
<script lang="ts">
  const projects = [
    {
      title: "Navicon",
      type: "Corporate website",
      description: "Redesign and development of a new corporate website that increased conversion rate by 2x",
      image: "/images/navicon-preview.jpg"
    },
    
    // Add more projects here
  ];
</script>

<svelte:head>
  <title>Projects | Maksim Postnikov</title>
</svelte:head>

<div class="min-h-screen bg-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-unbounded font-bold mb-12">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project}
        <div class="bg-gray-100 rounded-lg overflow-hidden">
          <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.type}</p>
            <p>{project.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
