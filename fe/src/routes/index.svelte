<script>
	import Counter from "$components/Counter.svelte";
	import { useQuery, QueryClientProvider, QueryClient } from "@sveltestack/svelte-query";

	const queryClient = new QueryClient();
</script>

<style lang="scss">
</style>

<main>
	<QueryClientProvider client={queryClient} >
		Hello
	</QueryClientProvider>
</main>
