<script lang="ts">
    let {news, onClose}: {
        news: {
            title: string;
            description: string;
            imgUrl?: string;
            date: string;
        },
        onClose: () => void
    } = $props();
</script>

<div class="card-detail">
    <button class="close-button" onclick={onClose}>×</button>
    {#if news.imgUrl}
        <img src={news.imgUrl} alt={news.title} class="card-image"/>
    {/if}
    <h2>{news.title}</h2>
    <p>{@html news.description}</p>
    <p class="date">{news.date}</p>

</div>

<style lang="scss">
  .card-detail {
    position: relative;
    border: 1px solid #ddd; /* Light border for subtle separation */
    border-radius: 10px; /* Rounded corners for a modern look */
    padding: 20px; /* Spacious padding */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    background: white; /* White background for clarity */
    //max-width: 700px; /* Reasonable max width */
    width: 50%; /* Responsive width */
    height: auto;
    margin: 20px auto; /* Center and space around */
    text-align: center; /* Centered text */
    box-sizing: border-box; /* Ensure padding is included in size */

    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 8px;    }
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #000000; /* Subtle color for close button */
    transition: transform 0.3s;
  }

  .close-button:hover {
    color: #cd0a0a; /* Darker color on hover */
    transform: scale(1.2) rotateZ(180deg);
  }

  .card-image {
    width: auto; /* Full width image */
    max-height: 300px;
    border-radius: 8px; /* Rounded corners */
    margin-bottom: 20px; /* Space below image */
  }

  h2 {
    margin: 0 0 10px;
    font-size: 1.8em; /* Slightly larger for emphasis */
    color: #333; /* Dark text for readability */
  }

  p {
    margin: 0;
    font-size: 1em;
    line-height: 1.5;
    color: #555; /* Grayish text for a softer look */
  }
  .date {
    text-align: right;
  }
</style>