<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    // import Compass from "$lib/components/Compass.svelte";

    type NewsData = {
        title: string;
        description: string;
        imgUrl?: string;
        date: string;
    };

</script>


<div class="fixed-header">
    <Header/>
</div>

<div class="fixed-footer">
    <Footer/>
</div>

<style lang="scss">
  @import "../../app";
</style>
