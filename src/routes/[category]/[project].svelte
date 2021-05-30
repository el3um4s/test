
<script context="module">
    export async function load({ page }) {
        let category = page.params.category;
        let project = page.params.project;
        console.log(category, project);
        return { props: { category, project }}
    }   
</script>

<script>
    export let category = "-";
    export let project = "-";
</script>

<div class="slug">
    {category}/{project}
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