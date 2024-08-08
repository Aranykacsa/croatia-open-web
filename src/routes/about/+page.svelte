<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import about from "$lib/content/about.json"

    let info: {
        title: string,
        email: string,
        address: string,
    } = about
</script>


<div class="fixed-header">
    <Header/>
</div>
<div class="content">
    {@html info.title}
</div>

<div class="fixed-footer">
    <Footer/>
</div>

<style lang="scss">
  @import "../../app";
</style>
