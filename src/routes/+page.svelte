<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import News from "$lib/components/News.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import descriptions from '$lib/content/content.json';

    type NewsData = {
        title: string;
        description: string;
        imgUrl?: string;
        date: string;
    };

    const newsList: NewsData[] = descriptions.news;
</script>

<div class="fixed-header">
    <Header/>
</div>

<div class="content">
    {#each newsList as news}
        <News news={news}/>
    {/each}
</div>

<div class="fixed-footer">
    <Footer/>
</div>

<style lang="scss">
    @import "../app";
</style>
