<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import descriptions from '$lib/content/content.json';
    import Compass from "$lib/components/Compass.svelte";

    type NewsData = {
        title: string;
        description: string;
        imgUrl?: string;
        date: string;
    };

    const newsList: NewsData[] = descriptions.news;
</script>
<main>
    <div class="fixed-header">
        <Header/>
    </div>

    <div class="content">
        <Compass/>
    </div>

    <div class="fixed-footer">
        <Footer url={"https://www.facebook.com/croatiaopen.orienteering"}/>
    </div>
</main>

<style lang="scss">
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure the header is above other content */
    background-color: white; /* Ensure background color if needed */
  }

  .fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure the footer is above other content */
    background-color: white; /* Ensure background color if needed */
  }

  .content {
    padding-top: 60px; /* Adjust based on header height */
    padding-bottom: 40px; /* Adjust based on footer height */
  }

  main{
    background-image: url("/topography.svg")
  }
</style>
