<script lang="ts">
    let {imgUrl, onClose}: {
        imgUrl: string,
        onClose: () => void
    } = $props();
</script>

<div class="card-detail">
    <button class="close-button" onclick={onClose}>×</button>
    <img src={imgUrl} alt={imgUrl} class="card-image"/>
</div>

<style lang="scss">
  .card-detail {
    position: relative;
    border: 1px solid #ddd; /* Light border for subtle separation */
    border-radius: 10px; /* Rounded corners for a modern look */
    padding: 20px; /* Spacious padding */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    background: white; /* White background for clarity */
    max-width: 80%; /* Set max width to 80% of the viewport */
    margin: 20px auto; /* Center and space around */
    text-align: center; /* Centered text */
    box-sizing: border-box; /* Ensure padding is included in size */

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
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
    width: 100%; /* Full width of the container */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px; /* Rounded corners */
    margin-bottom: 20px; /* Space below image */
  }
</style>