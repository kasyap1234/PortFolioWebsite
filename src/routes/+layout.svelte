<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	
	let particles = [];
	const particleCount = 30; // Reduced particle count

	onMount(() => {
		for (let i = 0; i < particleCount; i++) {
			particles.push({
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 2 + 1, // Smaller particles
				color: `hsla(${Math.random() * 360}, 70%, 70%, 0.3)`, // More transparent
				speed: Math.random() * 0.2 + 0.05 // Slower movement
			});
		}

		function animate() {
			particles = particles.map((p) => ({
				...p,
				x: (p.x + p.speed) % 100,
				y: (p.y + p.speed * 0.5) % 100
			}));
			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<div class="font-inter">
	<div class="fixed inset-0 pointer-events-none">
		<svg width="100%" height="100%">
			{#each particles as particle}
				<circle cx="{particle.x}%" cy="{particle.y}%" r={particle.size} fill={particle.color} />
			{/each}
		</svg>
	</div>

	<header class="fixed w-full top-0 bg-white z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
			<a href="/" class="text-2xl font-unbounded font-bold">Kasyap Dharanikota</a>
			<nav class="hidden md:flex space-x-8">

				<a href="/projects" class="hover:text-blue-600 transition-colors">Projects</a>
				<a href="/resume" class="hover:text-blue-600 transition-colors">Resume</a>
				<a href="/about" class="hover:text-blue-600 transition-colors">About me</a>
				<a href="/experience" class="hover:text-blue-600 transition-colors">Experience</a>
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
