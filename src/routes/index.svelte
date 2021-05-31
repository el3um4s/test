<script context="module">
	export const prerender = true;
</script>

<script>
    import experiments from "../stores/projects-list.js";
</script>

<h1>Welcome to SvelteKit</h1>
<p><a href="projects">projects</a></p>
<p><a href="about">about</a></p>
<p><a href="mini-template/006-iss-tracker">mini-template/006-iss-tracker</a></p>
<p><a href="mini-template/005-keycode-info">mini-template/005-keycode-info</a></p>
<p><a href="category/project">/category/project</a></p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
    <ul>
        {#each $experiments as exp}
            <li><a href="{exp.category}/{exp.project}">{exp.title}</a> ({exp.description})</li>
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