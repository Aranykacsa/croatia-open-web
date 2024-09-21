<script lang="ts">
    import Card from './NewsCard.svelte';

    let {news}: {
        news: {
            title: string;
            description: string;
            imgUrl?: string;
            date: string
        }
    } = $props()

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
    <h2>{news.title}</h2>
    <div class="card-img">
        {#if news.imgUrl}
            <img src={news.imgUrl} alt={news.title} class="card-image"/>
        {/if}
    </div>
    <div class="card-date">
        <p>{news.date}</p>
    </div>
</div>

{#if showCard}
    <div class="overlay">
        <Card {news} onClose={closeCard}/>
    </div>
{/if}

<style lang="scss">

  @import "../../app.scss";

  .card:hover {
    border-color: rgba(0, 139, 248, 0.57);
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.5);
  }

  .card-date {
    position: absolute;
    bottom: 16px; /* Distance from the bottom */
    right: 16px; /* Distance from the right */
    text-align: right; /* Aligns the text within the date container */
    width: auto; /* Adjusts the width */
  }

  .card {
    z-index: 0;
    height: 286px;
    width: 300px;
    padding: 16px;
    border: 2px solid #000000;
    border-radius: 8px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    margin-top: 16px;
    //margin-bottom: 16px;
    text-align: center;
    cursor: pointer;
    background: #ffffff;
    position: relative;
    transition: 0.3s ease;
  }

  //.card-content {
  //  display: flex;
  //  flex-direction: column;
  //  justify-content: center;
  //  align-items: center;
  //  height: 100%;
  //  position: relative; /* Ensures relative positioning within the card */
  //}

  .card-image {
    max-width: 100%;
    max-height: 160px;
    height: auto;
    border-radius: 8px;
  }

  p {
    margin-top: 16px;
    align-self: flex-end; /* Aligns the date to the right */
    text-align: right;
    width: 100%; /* Makes sure the date spans the width of the container */
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
</style>
