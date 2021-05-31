<script context="module">
	export const prerender = true;
</script>

<script>
    import experiments from "../stores/projects-list.js";
    let category = "mini-template";

    const listCategories = Array.from (new Set( $experiments.map(x => x.category) ));

</script>

<h1>Welcome to SvelteKit</h1>
<p><a href="projects">projects</a></p>
<p><a href="about">about</a></p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<select bind:value={category}>
    {#each listCategories as cat}
        <option value={cat}>
            {cat}
        </option>
    {/each}
</select>

<div>
    <ul>
        {#each $experiments as exp}
            {#if exp.category === category}
                <li><a href="{exp.category}/{exp.project}">{exp.title}</a> ({exp.description})</li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    h1 {
        color: red;
    }
    p, a {
        background-color: purple;
        color: yellow!important;
    }
</style>