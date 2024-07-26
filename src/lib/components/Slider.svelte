<script>
  const images = [
    'aws.png',
    'docker.png',
    'fastapi.png',
    'golang.png',
    'NestJS.png',
    'nodejs.png',
    'svelte.png',
  ];
  const imagePaths = images.map((image) => `/images/${image}`);
</script>

<div class="w-full overflow-hidden">
  <div class="flex animate-slide">
    {#each [...imagePaths, ...imagePaths] as src}
      <img {src} alt="" class="w-24 h-24 object-contain mx-5" />
    {/each}
  </div>
</div>

<style>
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-slide {
    animation: slide 30s linear infinite;
  }
</style>
