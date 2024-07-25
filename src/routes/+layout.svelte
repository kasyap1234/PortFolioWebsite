<script lang="ts">
  import '../app.css';
  
  import { spring } from 'svelte/motion';
   import { onMount } from 'svelte';
   import { fade } from 'svelte/transition';
  let mouseX = spring(0);
  let mouseY = spring(0);
  let dots: { x: number; y: number; size: number }[] = [];

  onMount(() => {
    for (let i = 0; i < 50; i++) {
      dots.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5
      });
    }
    dots = dots;
  });

  function handleMouseMove(event: MouseEvent) {
    mouseX.set(event.clientX / window.innerWidth);
    mouseY.set(event.clientY / window.innerHeight);
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="font-inter">
  <div class="fixed inset-0 pointer-events-none">
    {#each dots as dot}
      <div
        class="absolute rounded-full bg-blue-200 opacity-50"
        style="
          left: calc({dot.x}% + {$mouseX * 20 - 10}px);
          top: calc({dot.y}% + {$mouseY * 20 - 10}px);
          width: {dot.size}px;
          height: {dot.size}px;
        "
      />
    {/each}
  </div>

  <header class="fixed w-full top-0 bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-unbounded font-bold">Kasyap Dharanikota</a>
      <nav class="hidden md:flex space-x-8">
        <a href="/projects" class="hover:text-blue-600 transition-colors">Projects</a>
        <a href="/resume" class="hover:text-blue-600 transition-colors">Resume</a>
        <a href="/about" class="hover:text-blue-600 transition-colors">About me</a>
        <a href="/contact" class="hover:text-blue-600 transition-colors">Contact</a>
        <a href="/blog" class="hover:text-blue-600 transition-colors">Blog</a>
      </nav>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <footer class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; 2024 Kasyap Dharanikota. All rights reserved.</p>
    </div>
  </footer>
</div>

<style lang="postcss">
  :global(body) {
    @apply antialiased;
  }
</style>
