<script>
  import "../app.css";
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let menuOpen = false;
</script>

<div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
  <nav class="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <a href="/" class="flex items-center py-4 px-2">
              <span class="font-semibold text-gray-500 dark:text-gray-300 text-lg">Your Name</span>
            </a>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <a href="/" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Home</a>
          <a href="/resume" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Resume</a>
          <a href="/projects" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Projects</a>
          <a href="/experience" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Experience</a>
          <ThemeToggle />
        </div>
        <div class="md:hidden flex items-center">
          <button on:click={() => menuOpen = !menuOpen} class="outline-none mobile-menu-button">
            <svg class="w-6 h-6 text-gray-500 hover:text-primary-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {#if menuOpen}
      <div transition:fly={{ y: -20, duration: 300, easing: quintOut }} class="mobile-menu md:hidden">
        <a href="/" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Home</a>
        <a href="/resume" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Resume</a>
        <a href="/projects" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Projects</a>
        <a href="/experience" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Experience</a>
        <div class="py-2 px-4">
          <ThemeToggle />
        </div>
      </div>
    {/if}
  </nav>

  <main class="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
    <div in:fade={{ duration: 300 }}>
      <slot />
    </div>
  </main>

  <footer class="bg-white dark:bg-gray-800 transition-colors duration-200">
    <div class="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <p class="text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2024 Your Name. All rights reserved.
      </p>
    </div>
  </footer>
</div>

<!-- In the desktop navigation -->
<div class="hidden md:flex items-center space-x-3">
  <a href="/" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Home</a>
  <a href="/resume" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Resume</a>
  <a href="/projects" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Projects</a>
  <a href="/experience" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Experience</a>
  <a href="/contact" class="py-4 px-2 text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition duration-300">Contact</a>
  <ThemeToggle />
</div>

<!-- In the mobile menu -->
{#if menuOpen}
  <div transition:fly={{ y: -20, duration: 300, easing: quintOut }} class="mobile-menu md:hidden">
    <a href="/" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Home</a>
    <a href="/resume" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Resume</a>
    <a href="/projects" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Projects</a>
    <a href="/experience" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Experience</a>
    <a href="/contact" class="block py-2 px-4 text-sm hover:bg-primary-500 hover:text-white transition duration-300">Contact</a>
    <div class="py-2 px-4">
      <ThemeToggle />
    </div>
  </div>
{/if}