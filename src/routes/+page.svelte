<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import News from "$lib/components/News.svelte";
    // import Footer from "$lib/components/Footer.svelte";
    import descriptions from '$lib/content/news.json';

    type NewsData = {
        title: string;
        description: string;
        imgUrl?: string;
        date: string;
    };

    const newsList: NewsData[] = descriptions.news;
</script>

<Header/>

<div class="content">
    {#each newsList as news, i}
        <News news={news}/>
    {/each}
</div>

<!--<div class="fixed-footer">-->
<!--    <Footer/>-->
<!--</div>-->

<style lang="scss">
  @import "../app";

  .content {
    flex-wrap: wrap;
    padding-top: 80px; /* Adjust based on header height */
    padding-bottom: 120px; /* Adjust based on footer height */
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    gap: 30px;
  }

  .fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: white; /* Adjust as needed */
  }
</style>
