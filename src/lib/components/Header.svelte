<script lang="ts">
    import {goto} from "$app/navigation";

    type button = {
        name: string,
        onClick: () => void,
    }

    let pages: button[] = [
        {
            name: "About",
            onClick: async () => await goto("about"),
        },
        {
            name: "Organizers",
            onClick: async () => await goto("organizers"),
        },
        {
            name: "Registration",
            onClick: async () => window.open("https://www.orienteeringonline.net/CompetitionBasicInfo.aspx?CompetitionID=13445")

        },
    ]

</script>

<div class="header">
    {#each pages as page, i}
        <div class="nav-item">
            <label for={page.name} onclick={page.onClick}>{page.name}</label>
        </div>
        {#if i+1 !== pages.length}
            <div class="separator"></div>
        {/if}

    {/each}
</div>

<style lang="scss">

  @import "../../app.scss";
    .header {
        display: flex;
        justify-content: flex-end; /* Align items to the right */
        align-items: stretch; /* Stretch items to the height of the container */
        background-color: #282c34;
        padding: 20px;
        /*margin: 20px; !* Space around the header *!*/
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      @include xs {
        background-color: red;
        padding: 10px;
      }

      @include sm {
        background-color: blue;
        padding: 15px;
      }

      @include md {
        background-color: green;

      }

      @include lg {
        background-color: yellow;
        padding: 20px;
      }
    }

    .nav-item {
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-size: 1.5em; /* Increased font size */
        color: #ffffff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      @include xs {
        background-color: red;

      }

      @include sm {
        background-color: blue;
        padding: 0 10px;
        font-size: 1em; /* Increased font size */
      }

      @include md {
        background-color: green;
        padding: 0 15px;
        font-size: 1.25em; /* Increased font size */
      }

      @include lg {
        background-color: yellow;
        padding: 0 20px;
        font-size: 1.5em; /* Increased font size */
      }
    }

    .nav-item a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        transition: color 0.3s;
    }

    .nav-item label {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        transition: color 0.3s;
    }

    .nav-item a:hover {
        color: #61dafb;
    }

    .nav-item label:hover {
        color: #61dafb;
    }

    .separator {
        display: flex;
        align-items: center;
        transform: rotate(45deg);
        width: 4px;
        background-color: #61dafb; /* Light blue color for the separator */
        margin: 0 15px; /* Spacing around the separator */

      @include xs {
      }

      @include sm {
        margin: 0 5px; /* Spacing around the separator */
      }

      @include md {
        margin: 0 10px; /* Spacing around the separator */
      }

      @include lg {
        margin: 0 15px; /* Spacing around the separator */
      }
    }
</style>
