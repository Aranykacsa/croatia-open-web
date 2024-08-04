<script lang="ts">
    import Card from './Card.svelte';

    let {news}: {
        news: {
            title: string;
            description: string;
            imgUrl?: string;
            date: string
        }
    } = $props()

    console.log(news.imgUrl);

    let showCard = $state(false);

    function cardify() {
        showCard = true;
        document.body.style.overflow = 'hidden';  // Disable scrolling
    }

    function closeCard() {
        showCard = false;
        document.body.style.overflow = 'auto';  // Enable scrolling
    }

</script>

    <div class="card" onclick={cardify}>
        <p>{news.date}</p>
        {#if news.imgUrl}
            <img src={news.imgUrl} alt={news.title} class="card-image" />
        {/if}
        <h2>{news.title}</h2>
    </div>

{#if showCard}
    <div class="overlay">
        <Card {news} onClose={closeCard}/>
    </div>
{/if}

<style lang="scss">
  .card:hover {
    border-color: rgba(0, 139, 248, 0.57);
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.5);
  }

  .card {
    border: 2px solid #000000;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    width: 50%;
    margin: 16px auto;
    text-align: center;
    cursor: pointer;
    background: #ffffff;
    position: relative; /* Ensure card-button positioning works correctly */
    transition: 0.3s ease;
  }

  .card-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  p {
    text-align: right;
  }
</style>