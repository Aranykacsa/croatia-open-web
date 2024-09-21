<script lang="ts">
    import PhotoCard from "$lib/components/PhotoCard.svelte";

    let showCard = $state(false);
    let {imgUrl}: { imgUrl: string } = $props()

    function cardify() {
        showCard = true;
        document.body.style.overflow = 'hidden';  // Disable scrolling
    }

    function closeCard() {
        showCard = false;
        document.body.style.overflow = 'auto';  // Disable scrolling

    }
</script>

<div class="masonry-item">
    <img src={imgUrl} alt="Image" loading="lazy" onclick={cardify}>
</div>

{#if showCard}
    <div class="overlay">
        <PhotoCard imgUrl={imgUrl} onClose={closeCard}/>
    </div>
{/if}

<style lang="scss">
  @import "../../app.scss";

  .masonry-item {
    break-inside: avoid;
    margin-bottom: 10px;
    cursor: pointer;

    img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .photo-card-container {
      max-width: 90%;
      max-height: 90%;
    }
  }
</style>