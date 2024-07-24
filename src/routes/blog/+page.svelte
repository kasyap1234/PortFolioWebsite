<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Blog | Your Name</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-5xl font-extrabold text-indigo-900 mb-8" in:fade="{{ duration: 1000 }}">
      Blog
    </h1>
    <div class="bg-white rounded-xl shadow-lg p-8" in:fade="{{ duration: 500, delay: 200 }}">
      <p class="text-xl text-gray-800 mb-6">
        I share my thoughts and insights on product design, development, and industry trends on my Substack newsletter.
      </p>
      <a href="https://yoursubstack.substack.com" target="_blank" rel="noopener noreferrer" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block">
        Read my blog on Substack
      </a>
    </div>
  </div>
</div>
