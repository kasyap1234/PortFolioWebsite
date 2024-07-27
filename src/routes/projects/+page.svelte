<!-- src/routes/projects/+page.svelte -->
<script lang="ts">
	
	import {scale} from "svelte/transition";
	import {cubicOut} from "svelte/easing";
	  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion'; 


  const images=[
    'Terminal.jpg',
	'bandwidth.png',
	'Eduhub.png',
	'ToolSmith.png',
	'swin.png',
	'q.png'
	
  ]
  const imagePaths= images.map((image)=> `/assets/${image}`)
    console.log(imagePaths[0]); 

	const projects = [
		{
			title: 'NPM CLI ENV Package',
			type: 'NPM Package',
			description:
				'A CLI package that allows you to easily set and manage environment variables in your projects.',
			image: imagePaths[0],
		},
		{
			title: 'BandWidth Monitor',
			type: 'Web App',
			description:
				'A web app that allows you to monitor your internet bandwidth usage and monitor your internet speed without using any third-party services for bandwidth testing.',
			image: imagePaths[1],
		},
		{
			title: 'Eduhub Backend',
			type: 'Backend Service',
			description:
				'A backend service that allows you to manage your education resources and provide a platform for students to access and share educational materials written in Golang',
			image: imagePaths[2],

		},
		{
          title: 'ToolSmith',
		  type: 'Web App',
		  description: 'A multi functionality tool for users to store notes, manage tasks,manage finances, and share code ',

		  image: imagePaths[3]

		},

	{
		title: 'Image Dehazer',
		type: 'ML Model', 
		description : 'A ML model that dehazes images using visual transformer (swin transformer) ',
		image: imagePaths[4]


	}
	,
	{
		title: 'QuPoll',
		type: 'Web App',
		description: 'A web app that allows you to create polls and quizzes  and share them with your friends',
		image: imagePaths[5]
	}

		// Add more projects here
	];
</script>

<svelte:head>
	<title>Projects | Kasyap Dharanikota</title>
</svelte:head>

<div class="min-h-screen bg-white py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl font-unbounded font-bold mb-12">Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project}
				<div class="bg-gray-100 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110" >
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

