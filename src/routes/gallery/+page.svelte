<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Photo from "$lib/components/Photo.svelte";

    let images = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/400x600',
        'https://via.placeholder.com/500',
        'https://via.placeholder.com/300x400',
        'https://via.placeholder.com/600x300',
        'https://via.placeholder.com/200x300',
    ];
</script>

<div class="fixed-header">
    <Header/>
</div>

<div class="content">
    <div class="masonry">
        {#each images as image}
            <Photo imgUrl={image}/>
        {/each}
    </div>
</div>

<div class="fixed-footer">
    <Footer/>
</div>

<style lang="scss">
  @import "../../app.scss";

  .masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
  }
</style>
