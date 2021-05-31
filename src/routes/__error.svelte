<script context="module">
	export const prerender = true;
</script>

<script>
    /** @type { number } */
    export let status;
    /** @type { Error } */
    export let error;
    console.log(status);
    console.log(error);
</script>

<main>
    <h1>{status}</h1>
    <p>Something went wrong!</p>
    <pre>{error}</pre>
</main>