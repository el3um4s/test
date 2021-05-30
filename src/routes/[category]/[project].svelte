<script context="module">
    export async function load({ page }) {
        let category = page.params.category;
        let project = page.params.project;
        return { props: { category, project }}
    }   
</script>

<script>
    import experiments from "../../stores/projects.js";
    export let category = "-";
    export let project = "-";

    const projectInArchive = $experiments.filter(el => el.category === category && el.project == project);
    const projectExist = projectInArchive.length >= 1;
</script>

<div class="slug">
    {category}/{project}

    {#if projectExist}
        <div>
            <p>category: {projectInArchive[0].category}</p>
            <p>project: {projectInArchive[0].project}</p>
            <p>title: {projectInArchive[0].title}</p>
            <p>description: {projectInArchive[0].description}</p>
        </div>
    {:else}
        <p>project doesn't exist</p>
    {/if} 
</div>

<p> <a href="../">home</a> </p>

<style>
    .slug {
        background-color: lightgreen;
        color: darkgreen;
    }
    a {
        color: peachpuff;
        background-color: orangered;
    }
</style>