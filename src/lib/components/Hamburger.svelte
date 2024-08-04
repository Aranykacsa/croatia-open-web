<script lang="ts">
    let {pages}:{pages:navItem[]} = $props()
    let isMenuOpen = $state(false);

    type navItem = {
        name: string,
        onClick: () => void,
    }

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    };
</script>

<div class="hamburger-menu" onclick={toggleMenu}>
    <div class="bar" class:open={isMenuOpen}></div>
    <div class="bar" class:open={isMenuOpen}></div>
    <div class="bar" class:open={isMenuOpen}></div>
</div>

<div class={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
    {#each pages as page}
        <div class="mobile-menu-item" onclick={page.onClick}>
            {page.name}
        </div>
    {/each}
</div>

<style lang="scss">
  @import "../../app.scss";

  .hamburger-menu {
    display: none;
    cursor: pointer;
    margin-right: 10px;
    z-index: 1000;
    position: absolute;
    top: 20px;
    right: 20px;

    .bar {
      width: 25px;
      height: 3px;
      background-color: #ffffff;
      margin: 5px 0;
      transition: transform 0.3s ease, opacity 0.3s ease;

      &.open:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      &.open:nth-child(2) {
        opacity: 0;
      }

      &.open:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }

      @include xs {
        width: 25px;
      }

      @include sm {
        width: 0;
      }
    }

    @include xs {
      display: block;
    }
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    background-color: #282c34;
    position: fixed;
    top: 75px; /* Adjust to position the menu below the header */
    right: 0;
    width: 200px;
    max-height: 0; /* Start with no height */
    overflow: hidden; /* Hide overflow when closed */
    padding: 0 20px;
    border-radius: 0 0 0 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 999; /* Ensure it stays above other content */

    &.open {
      max-height: 100vh; /* Set a large value to accommodate content */
      padding: 20px;
    }

    .mobile-menu-item {
      color: #ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 1.5em;
      margin-bottom: 10px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #61dafb;
      }
    }
  }

</style>
