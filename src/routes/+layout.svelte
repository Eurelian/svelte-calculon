<script>
	import '../app.css';
	import { Navbar, NavUl, NavLi } from 'flowbite-svelte';
</script>

<div class="container mx-auto px-4">
	<Navbar>
		<NavUl>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/calculator">Calculators</NavLi>
		</NavUl>
	</Navbar>

	<main>
		<slot />
	</main>
</div>
