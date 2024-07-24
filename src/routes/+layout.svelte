<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
</script>

<div class="font-inter">
  <header class="fixed w-full top-0 bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-unbounded font-bold">Maksim Postnikov</a>
      <nav class="hidden md:flex space-x-8">
        <a href="/projects" class="hover:text-blue-600 transition-colors">Projects</a>
        <a href="/services" class="hover:text-blue-600 transition-colors">Services & Pricing</a>
        <a href="/about" class="hover:text-blue-600 transition-colors">About me</a>
        <a href="/contact" class="hover:text-blue-600 transition-colors">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <footer class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; 2024 Maksim Postnikov. All rights reserved.</p>
    </div>
  </footer>
</div>

<style lang="postcss">
  :global(body) {
    @apply antialiased;
  }
</style>
